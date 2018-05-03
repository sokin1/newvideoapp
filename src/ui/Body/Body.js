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
    }

    render() {
        return(
            <main className={styles.body}>
                <Switch>
                    <Route exact
                        path='/'
                        render={routeProps => (
                            <Start {...routeProps} userInfo={this.props.userInfo} groupInfo={this.props.groupInfo} />
                        )}
                    />
                    <Route
                        path='/setting'
                        render={routeProps => (
                            <Setting {...routeProps} userInfo={this.props.userInfo} groupInfo={this.props.groupInfo} />
                        )}
                    />
                    <Route
                        path='/group'
                        render={routeProps => (
                            <Group {...routeProps} userInfo={this.props.userInfo} groupInfo={this.props.groupInfo} />
                        )}
                    />
                    <Route
                        path='/signup'
                        render={routeProps => (
                            <SignUp {...routeProps} loc={this.props.loc} status={this.props.status} detail={this.props.detail} />
                        )}
                    />
                </Switch>
            </main>
        )
    }
}