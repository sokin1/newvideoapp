import React from 'react'

import Main from './Main'
import Header from './Header'
import Footer from './Footer'

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.state
    }

    render() {
        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}