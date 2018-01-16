import React from 'react'
import { render } from 'react-dom'

import MainComponent from './components/MainComponent.js'

render(<MainComponent state={JSON.parse(window.__initial_states__)}/>,
        document.querySelector('#root'))