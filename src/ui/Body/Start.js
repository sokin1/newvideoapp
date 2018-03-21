import React from 'react'

import TitlePage from './TitlePage'
import MainPage from './MainPage'

import firebase from 'firebase'

export default class Start extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.loc === 'START') {
            return(
                <TitlePage />
            )
        } else if(this.props.loc === 'LOGIN') {
            return(
                <MainPage userInfo={this.props.userInfo} groupInfo={this.props.groupInfo} />
            )
        } else {
            return(
                <TitlePage />
            )
        }
    }
}