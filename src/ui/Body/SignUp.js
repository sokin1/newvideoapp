import React from 'react'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: this.props.state.status,
            uid: this.props.state.uid,
            reason: this.props.state.reason
        }
    }

    render() {
        if(this.state.status === 'ERROR') {
            return(
                <div>
                    <h1>Sign up has been failed..</h1><br />
                    <h2>{this.state.reason}</h2>
                </div>
            )
        } else {
            return(
                <h1>Notification has been sent.</h1>
            )
        }
    }
}