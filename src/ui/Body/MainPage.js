import React from 'react'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: this.props.userInfo
        }
    }

    render() {
        return(
            <h1>{this.state.userInfo}</h1>
        )
    }
}