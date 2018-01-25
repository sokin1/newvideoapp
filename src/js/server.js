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

app.get('/*', (req, res) => {
    const context = {}
    const initData = {content: 'api'}

    var html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <MainComponent state={initData}/>
         </StaticRouter>
    )

    res.send(ReactDOMServer.renderToString(<HtmlTemplate content={html} state={initData} />))
})

var PORT = 3000
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})