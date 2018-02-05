import React from 'react'

import TitlePage from './TitlePage'
import MainPage from './MainPage'

export default class Start extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: this.props.status,
            uid: this.props.uid
        }
    }

    render() {
        if(this.state.uid === undefined) {
            return(
                <TitlePage />
            )
        } else {
            return(
                <MainPage />
            )
        }
    }
}