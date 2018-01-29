import React from 'react'

import SignUpForm from './SignUpForm'
import AppMain from './AppMain'

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
                <SignUpForm />
            )
        } else {
            return(
                <AppMain />
            )
        }
    }
}