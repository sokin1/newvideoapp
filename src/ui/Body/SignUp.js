import React from 'react'

export default class SignUp extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            loc: this.props.loc,
            status: this.props.status,
            uid: this.props.uid,
            detail: this.props.detail,
            reason: this.props.reason
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
                <h1>{this.state.detail}</h1>
            )
        }
    }
}