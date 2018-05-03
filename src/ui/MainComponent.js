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
        }
    }

    componentDidMount() {
        if(this.state.detail.fb_config && this.state.detail.email) {
            firebase.initializeApp(this.state.detail.fb_config)

            setTimeout(() => {
                firebase.database().ref('users/' + md5(this.state.detail.email)).on('value', userSnapshot => {
                    if(userSnapshot.val().lastGroup !== '') {
                        var groupRef = firebase.database().ref('groups/' + userSnapshot.val().lastGroup)
                        groupRef.on('value', groupSnapshot => {
                            this.setState({
                                userInfo: userSnapshot.val(),
                                groupInfo: groupSnapshot.val(),
                                members: groupSnapshot.val().members
                            })
                        })
                        // Add myself to members
                        var memberRef = firebase.database().ref('groups/' + userSnapshot.val().lastGroup + '/members')
                        memberRef.push(md5(this.state.detail.email))

                        // Set up onchange event for updating members
                        memberRef.on('child_added', (data, prevChildKey) => {
                            this.setState({
                                members: [...members, data.val()]
                            })
                        })

                        memberRef.on('child_removed', data => {
                            var oldMembers = this.state.members
                            var index = oldMembers.indexOf(data.val())
                            oldMembers.splice(index, 1)
                            this.setState({
                                members: oldMembers
                            })
                        })
                    } else{
                        this.setState({
                            userInfo: userSnapshot.val(),
                            groupInfo: undefined
                        })
                    }
                })
            }, 1000)
        }
    }

    render() {
        return(
            <div>
                <Header loc={this.state.loc} userInfo={this.state.userInfo}/>
                <Body loc={this.state.loc} userInfo={this.state.userInfo} groupInfo={this.state.groupInfo}/>
                <Footer />
            </div>
        )
    }
}