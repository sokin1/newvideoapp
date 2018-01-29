import React from 'react'

import styles from './LogInForm.css'

export default class LogInForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.login_form}>
                <form method='post' action='/'>
                    <label id="email">Email:</label>
                    <input type="text" id="email" name="email" />

                    <label id="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    <input type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}