import React from 'react'

import styles from './SignUpForm.css'

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.signUpForm}>
                <form method='post' action='/signup'>
                    <div className={styles.email}>
                        <label id="email">Email:</label>
                        <input type="text" id="email" name="email" />
                    </div>

                    <div className={styles.password}>
                        <label id="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <div className={styles.confirm_password}>
                        <label id="password">Confirm Password:</label>
                        <input type="password" id="confirm_password" name="confirm_password" />
                    </div>

                    <div className={styles.submit_btn}>
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
        )
    }
}