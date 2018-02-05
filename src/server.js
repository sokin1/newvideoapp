import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { StaticRouter } from 'react-router-dom'
import cookieParser from 'cookie-parser'

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

    console.log(rendered_page)

    res.end(rendered_page)
}

app.post('/', (req, res) => {
    res.cookie('uname', req.cookies.uname, {expires: new Date(Date.now() + 900000), httpOnly: true})
    res.cookie('uid', req.cookies.uid, {expires: new Date(Date.now() + 90000), httpOnly: true})
    res.cookie('status', 'loggedin', {expires: new Date(Date.now() + 90000), httpOnly: true})

    const initData ={loc: 'MAIN', status: 'LOGGEDIN', uid: req.cookies.uid}
    renderPage(req, res, initData)
})

app.post('/signup', (req, res) => {
    var client = new net.Socket()
    client.connect(1337, '127.0.0.1', () => {
        const jsonData = {
            action: 'SIGN_UP_P1',
            username: md5(req.body.email),
            password: md5(Crypto.encoder(req.body.password))
        }

        client.write(JSON.stringify(jsonData))
    })

    client.on('data', data => {
        var result = JSON.parse(data)
        if(result.Result) {
            const initData = {loc: 'SIGNUP_P1', status: 'Notification Sent', uid: result.uid}
            res.cookie('uname', result.email, {expires: new Date(Date.now() + 900000), httpOnly: true})
            res.cookie('uid', result.uid, {expires: new Date(Date.now() + 90000), httpOnly: true})
            res.cookie('status', 'signup_p2', {expires: new Date(Date.now() + 90000), httpOnly: true})
            renderPage(req, res, initData)
        } else {
            const initData = {loc: 'SIGNUP_P1', status: 'Sign Up Failed', uid: undefined}
            renderPage(req, res, initData)
        }
    })
})

app.get('/signup_p2', (req, res) => {

})

app.get('/', (req, res) => {
    var cur_uid = req.cookies.uid

    if(cur_uid === undefined) {
        const initData = {loc: 'START', status: 'NA', uid: cur_uid}
        renderPage(req, res, initData)
    } else {
        res.cookie('uname', req.cookies.uname, {expires: new Date(Date.now() + 900000), httpOnly: true})
        res.cookie('uid', req.cookies.uid, {expires: new Date(Date.now() + 90000), httpOnly: true})
        res.cookie('status', 'loggedin', {expires: new Date(Date.now() + 90000), httpOnly: true})

        const initData = {loc: 'MAIN', status: 'LOGGEDIN', uid: cur_uid}
        renderPage(req, res, initData)
    }
})

app.get('/signup', (req, res) => {
    const initData = {loc: 'SIGNUP_P1', status: 'NA', uid: undefined}
    renderPage(req, res, initData)
})

var PORT = 3000
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})
