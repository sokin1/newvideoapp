import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import MainComponent from './ui/MainComponent'

import styles from './ui/Global.css'

ReactDOM.render((
    <BrowserRouter>
        <MainComponent state={JSON.parse(window.__initial_states__)}/>
    </BrowserRouter>),
    document.getElementById('root'))