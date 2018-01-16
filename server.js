import React from 'react'
import ReactDOMServer from 'react-dom/server'
var express = require('express')

import MainComponent from './src/components/MainComponent.js'

import template from './public/template'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    const state = {
        uid: null,
        cur_page: 'START'
    }
    const html = ReactDOMServer.renderToString(<MainComponent state={state} />)

    res.send(template({
        body: html,
        title: 'Welcome!'
    }))
})

var PORT = 3000
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})