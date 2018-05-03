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

const http = require('http').Server(app)
var io = require('socket.io')(http)

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

function getAccountInfo(info) {
    
}

app.post('/', (req, res) => {
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

        var cookieData = {
            'credential': result.Detail.accCredential,
            'uid': result.Detail.uid
        }

        res.cookie('data', cookieData, {maxAge: 30 * 24 * 60 * 60 * 1000, signed: true})

        if(result.Result) {
            res.cookie('accCredential', result.Detail.accCredential)
            res.cookie('expiryTime', new Date().getDate() + 30 * 24 * 3600 * 1000)
            res.cookie('fb_config', result.Detail.fb_config)
            res.cookie('email', result.Detail.email)
            initData = {loc: 'MAIN', status: 'LOGIN', detail: {fb_config: result.Detail.fb_config, email: result.Detail.email}}
        } else {
            initData = {loc: 'START', status: 'ERROR', detail: result.reason}
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
            initData = {loc: 'SIGNUP', status: 'ERROR', detail: result.fail_reason}
        }

        renderPage(req, res, initData)
    })
})

app.get('/', (req, res) => {
    console.log('Cookies: ', req.cookies)
    var cookies = req.cookies
    var initData

    if(cookies === undefined) {
        // No cookie exists, go to start page
        initData = {loc: 'START', status: 'NA', detail: 'NA'}
    } else {
        if(cookies.expiryTime - new Date().getDate() <= 0) {
            // Cookie is expired, send credential to server and get cookie updated
            var client = new net.Socket()
            client.connect(1337, '127.0.0.1', () => {
                const jsonData = {
                    Action: 'LOG_IN_WITH_CREDENTIAL',
                    Credential: cookies.accCredential
                }
        
                client.write(JSON.stringify(jsonData))
            })

            client.on('data', data => {
                var result = JSON.parse(data)
                if(result.Result) {
                    res.cookie('expiryTime', new Date().getDate() + 30 * 24 * 3600 * 1000)
                    initData = {loc: 'MAIN', status: 'LOGIN', detail: {fb_config: cookies.fb_config, email: cookies.email}}
                } else {
                    res.clearCookie('accCredential')
                    res.clearCookie('expiryTime')
                    res.clearCookie('fbConfig')
                    res.clearCookie('email')
                    initData = {loc: 'START', status: 'ERROR', detail: result.reason}
                }
            })
        } else {
            // Cookie is not expired, don't need to talk to server
            initData = {loc: 'MAIN', status: 'LOGIN', detail: {fb_config: cookies.fb_config, email: cookies.email}}
        }
    }
})

var PORT = 3000
http.listen(PORT, () => {
    console.log('listening on *:3000');
})