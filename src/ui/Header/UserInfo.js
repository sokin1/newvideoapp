import React from 'react'

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <header className={styles.header} >
                <div id="logo_img">
                    <Link to='/'>image</Link>
                </div>
                <div id="userInfo">
                    UserInfo
                </div>
            </header>
        )
    }
}