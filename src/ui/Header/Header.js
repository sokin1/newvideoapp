import React from 'react'

import LogInForm from './LogInForm'
import UserInfo from './UserInfo'
import Logo from './Logo'

import styles from './Header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: this.props.state.status,
            uid: this.props.state.uid
        }
    }

    render() {
        if(this.state.uid === undefined) {
            return(
                <header className={styles.header} >
                    <Logo />
                    <LogInForm />
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