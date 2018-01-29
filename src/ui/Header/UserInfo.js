import React from 'react'

import styles from './UserInfo.css'

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.userInfo}>
                UserInfo
            </div>
        )
    }
}