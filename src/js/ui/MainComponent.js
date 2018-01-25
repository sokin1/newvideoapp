import React from 'react'

import Main from './Main'
import Header from './Header'
import Footer from './Footer'

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.content)
        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}