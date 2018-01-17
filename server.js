import React from 'react'
import ReactDOMServer from 'react-dom/server'
var express = require('express')
import path from 'path'

import MainComponent from './src/components/MainComponent.js'

import template from './public/template'

const app = express()

app.set('views', path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    const initial_state = {
        uid: null,
        cur_page: 'START'
    }
    const html = ReactDOMServer.renderToString(<MainComponent state={initial_state} />)

    res.end(template({
        body: html,
        title: 'Welcome!',
        state: initial_state
    }))
})

var PORT = 3000
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})