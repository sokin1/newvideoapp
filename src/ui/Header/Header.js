import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.css'

import LogInForm from './LogInForm'
import UserInfo from './UserInfo'

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
                <LogInForm />
            )
        } else {
            return(
                <UserInfo />
            )
        }
    }
}