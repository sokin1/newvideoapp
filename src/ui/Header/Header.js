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
            status: this.props.state.status,
            uid: this.props.state.uid,
            detail: this.props.state.detail,
            reason: this.props.state.reason
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

        if(this.state.uid === undefined) {
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
                    <UserInfo />
                </header>
            )
        }
    }
}