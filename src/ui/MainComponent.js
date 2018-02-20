import React from 'react'

import Body from './Body/Body'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loc: this.props.state.loc,
            status: this.props.state.status,
            uid: this.props.state.uid,
            detail: this.props.state.detail,
            reason: this.props.state.reason
        }
    }

    render() {
        return(
            <div>
                <Header state={this.props.state} />
                <Body state={this.props.state} />
                <Footer />
            </div>
        )
    }
}