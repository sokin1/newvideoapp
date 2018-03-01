import React from 'react'

import Body from './Body/Body'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import firebase from 'firebase'
import md5 from 'md5'

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loc: this.props.state.loc,
            status: this.props.state.status,
            detail: this.props.state.detail,
            fb_config: this.props.state.fb_config,
            email: this.props.state.email,
            userInfo: undefined
        }
    }

    componentWillMount() {
        if(this.state.fb_config && this.state.email) {
            firebase.initializeApp(this.state.fb_config)

            firebase.database().ref('users/' + md5(this.state.email)).on('value', (snapshot) => {
                this.setState({
                    userInfo: snapshot.val()
                })
            })
        }
    }

    render() {
        return(
            <div>
                <Header loc={this.state.loc} userInfo={this.state.userInfo}/>
                <Body loc={this.state.loc} userInfo={this.state.userInfo} status={this.state.status} detail={this.state.detail} />
                <Footer />
            </div>
        )
    }
}