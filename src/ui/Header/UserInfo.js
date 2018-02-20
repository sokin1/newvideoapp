import React from 'react'

import styles from './UserInfo.css'

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: this.props.userInfo
        }
    }

    render() {
        return(
            <div className={styles.userInfo}>
                {this.state.userInfo}
            </div>
        )
    }
}