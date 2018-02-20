import React from 'react'

import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import UserInfo from './UserInfo'
import Logo from './Logo'
import EmptyHeader from './EmptyHeader'

import styles from './Header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loc: this.props.state.loc,
            userInfo: this.props.state.userInfo,
        }
    }

    render() {
        if(this.state.loc === 'SIGNUP') {
            return(
                <header className={styles.header} >
                    <EmptyHeader />
                </header>
            )
        }

        if(this.state.userInfo === undefined) {
            return(
                <header className={styles.header} >
                    <Logo />
                    <LogInForm />
                    <SignUpForm />
                </header>
            )
        } else {
            return(
                <header className={styles.header}>
                    <Logo />
                    <UserInfo userInfo={this.state.userInfo}/>
                </header>
            )
        }
    }
}