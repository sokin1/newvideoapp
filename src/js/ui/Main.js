import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                </Switch>
            </main>
        )
    }
}