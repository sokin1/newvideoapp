import React from 'react'
import ReactDOM from 'react-dom'

import MainComponent from './components/MainComponent.js'

// if(typeof(window.__initial_states__) === 'object') {
//     window.__initial_states__ = JSON.stringify(window.__initial_states__)
// }

ReactDOM.render(<MainComponent state={JSON.parse(window.__initial_states__)}/>,
        document.getElementById('root'))