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
            fb_config: this.props.state.fb_config,
            email: this.props.state.email
        }
    }

    componentWillMount() {
        if(this.state.fb_config && this.state.email) {
            firebase.initializeApp(fb_config)

            var ref = firebase.database().ref('users/' + md5(this.state.email))
            ref.on('value', snapshot => {
                console.log('snapshot', snapshot)
                this.state.setValue({
                    userInfo: snapshot
                })
            })
        }
    }

    render() {
        return(
            <div>
                <Header loc={this.state.loc} userInfo={this.state.userInfo}/>
                <Body loc={this.state.loc} userInfo={this.state.userInfo} />
                <Footer />
            </div>
        )
    }
}