import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { StaticRouter } from 'react-router-dom'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import net from 'net'
import md5 from 'md5'
import Crypto from './Crypto'

var express = require('express')
import path from 'path'
import HtmlTemplate from './htmlTemplate'

import MainComponent from './ui/MainComponent'

const app = express()

const clientDistPath = path.resolve(__dirname, '../dist')
app.use('/static', express.static(clientDistPath))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser())

function renderPage(req, res, initData) {
    const context = {}

    var html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <MainComponent state={initData}/>
        </StaticRouter>
    )

    var rendered_page = HtmlTemplate({
        content: html,
        state: initData
    })

    res.end(rendered_page)
}

app.post('/', (req, res) => {
    console.log('logging in')
    var client = new net.Socket()
    client.connect(1337, '127.0.0.1', () => {
        const jsonData = {
            action: 'LOG_IN',
            email: req.body.uname,
            password: md5(Crypto.encoder(req.body.psw))
        }

        client.write(JSON.stringify(jsonData))
    })

    client.on('data', data => {
        var result = JSON.parse(data)
        var initData

        if(result.Result) {
            initData = {loc: 'LOGIN', fb_config: result.fb_config, email: result.email}
        } else {
            initData = {loc: 'START', status: 'ERROR', reason: result.reason}
        }

        renderPage(req, res, initData)
    })
})

app.post('/signup', (req, res) => {
    var client = new net.Socket()
    client.connect(1337, '127.0.0.1', () => {
        const jsonData = {
            action: 'SIGN_UP',
            email: req.body.uname,
            password: md5(Crypto.encoder(req.body.psw)),
            confirm_password: md5(Crypto.encoder(req.body.psw_re))
        }

        client.write(JSON.stringify(jsonData))
    })

    client.on('data', data => {
        var result = JSON.parse(data)
        var initData

        if(result.Result) {
            initData = {loc: 'SIGNUP', status: 'SUCCESS', detail: 'Notification has been sent'}
        } else {
            initData = {loc: 'SIGNUP', status: 'ERROR', reason: result.fail_reason}
        }

        renderPage(req, res, initData)
    })
})

app.get('/', (req, res) => {
    var cur_uid = req.cookies.uid
    var initData

    if(cur_uid === undefined) {
        initData = {loc: 'START', status: 'NA', uid: cur_uid}
    } else {
        initData = {loc: 'MAIN', status: 'LOGGEDIN', uid: cur_uid}
    }

    renderPage(req, res, initData)
})

var PORT = 3000
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})
