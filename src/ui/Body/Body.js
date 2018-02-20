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
            loc: this.props.state.loc,
            userInfo: this.props.state.userInfo
        }
    }

    render() {
        return(
            <main className={styles.body}>
                <Switch>
                    <Route exact
                        path='/'
                        render={routeProps => (
                            <Start {...routeProps} {...this.props.state} />
                        )}
                    />
                    <Route
                        path='/setting'
                        render={routeProps => (
                            <Setting {...routeProps} {...this.props.state} />
                        )}
                    />
                    <Route
                        path='/group'
                        render={routeProps => (
                            <Group {...routeProps} {...this.props.state} />
                        )}
                    />
                    <Route
                        path='/signup'
                        render={routeProps => (
                            <SignUp {...routeProps} {...this.props.state} />
                        )}
                    />
                </Switch>
            </main>
        )
    }
}