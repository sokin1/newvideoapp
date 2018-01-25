import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { StaticRouter } from 'react-router-dom'

var express = require('express')
import path from 'path'
import HtmlTemplate from './htmlTemplate'

import MainComponent from './ui/MainComponent'

const app = express()

const clientDistPath = path.resolve(__dirname, '../dist')

app.use('/static', express.static(clientDistPath))

app.post('/signup', (req, res) => {
    const context = {}

    const initData = {loc: 'SIGNUP_P1', status: 'NA', uid: undefined}

    var html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <MainComponent state={initData}/>
         </StaticRouter>
    )

    res.send(ReactDOMServer.renderToString(<HtmlTemplate content={html} state={JSON.stringify(initData)} />))
})

app.get('/*', (req, res) => {
    const context = {}

    if(req.url ==='/') {
        const initData = {loc: 'START', status: 'NA', uid: undefined}

        var html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <MainComponent state={initData}/>
             </StaticRouter>
        )

        res.send(ReactDOMServer.renderToString(<HtmlTemplate content={html} state={JSON.stringify(initData)} />))
    } else if(req.url === '/signup') {
        const initData = {loc: 'SIGNUP_P1', status: 'NA', uid: undefined}

        var html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <MainComponent state={initData}/>
             </StaticRouter>
        )

        res.send(ReactDOMServer.renderToString(<HtmlTemplate content={html} state={JSON.stringify(initData)} />))
    } else if(req.url === '/main') {
        const initData = {loc: 'LOGIN', status: 'LOG_IN', uid: 'some uid'}

        var html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <MainComponent state={initData}/>
             </StaticRouter>
        )

        res.send(ReactDOMServer.renderToString(<HtmlTemplate content={html} state={JSON.stringify(initData)} />))
    } else {
        const initData = {loc: 'UNKNOWN', status: 'NA', uid: undefined}

        var html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <MainComponent state={initData}/>
             </StaticRouter>
        )

        res.send(ReactDOMServer.renderToString(<HtmlTemplate content={html} state={JSON.stringify(initData)} />))
    }
})

var PORT = 3000
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})