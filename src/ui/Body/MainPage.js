import React from 'react'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>{JSON.stringify(this.props.userInfo)}</h1><br />
                <h1>{JSON.stringify(this.props.groupInfo)}</h1>
            </div>
        )
    }
}