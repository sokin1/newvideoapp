import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}