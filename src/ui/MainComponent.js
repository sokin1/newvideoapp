import React from 'react'

import Body from './Body/Body'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: this.props.state.status,
            uid: this.props.state.uid
        }
    }

    render() {
        return(
            <div>
                <Header state={this.state} />
                <Body state={this.state} />
                <Footer />
            </div>
        )
    }
}