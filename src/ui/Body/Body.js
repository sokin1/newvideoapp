import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Start from './Start'
import SignUp from './SignUp'
import SignUp2 from './SignUp2'
import Setting from './Setting'
import Group from './Group'

import styles from './Body.css'

export default class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: this.props.state.status,
            uid: this.props.state.uid
        }
    }

    render() {
        return(
            <main className={styles.body}>
                <Switch>
                    <Route exact
                        path='/'
                        render={routeProps => (
                            <Start {...routeProps} {...this.state} />
                        )}
                    />
                    <Route
                        path='/signup'
                        render={routeProps => (
                           <SignUp {...routeProps} {...this.state} />
                        )}
                    />
                    <Route
                        path='/signup_p2'
                        render={routeProps => (
                            <SignUp2 {...routeProps} {...this.state} />
                        )}
                    />
                    <Route
                        path='/setting'
                        render={routeProps => (
                            <Setting {...routeProps} {...this.state} />
                        )}
                    />
                    <Route
                        path='/group'
                        render={routeProps => (
                            <Group {...routeProps} {...this.state} />
                        )}
                    />
                </Switch>
            </main>
        )
    }
}