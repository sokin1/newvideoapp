import React from 'react'

import TitlePage from './TitlePage'
import MainPage from './MainPage'

import firebase from 'firebase'

export default class Start extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loc: this.props.loc,
            userInfo: this.props.userInfo
        }
    }

    render() {
        if(this.state.userInfo === undefined) {
            return(
                <TitlePage />
            )
        } else {
            return(
                <MainPage userInfo={this.state.userInfo} />
            )
        }
    }
}