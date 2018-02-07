import React from 'react'

import styles from './SignUpForm.css'

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
    }

    openSignupModal(e) {
        e.preventDefault()
        document.getElementById('modal').style.display='block'
    }

    closeSignupModal(e) {
        e.preventDefault()
        document.getElementById('modal').style.display='none'
    }

    render() {
        return(
            <div>
                <button onClick={this.openSignupModal.bind(this)} className={styles.signupBtn}>Signup</button>
                <div id='modal' className={styles.modal}>
                    <span onClick={this.closeSignupModal.bind(this)} className={styles.close} title='Close Modal'>x</span>

                    <form className={styles.modalContent} method='post' action='/signup'>
                        <div className={styles.imgcontainer}>
                        </div>

                        <div className={styles.container}>
                            <label><b>Username</b></label>
                            <input type='text' placeholder='Enter Username' name='uname' required />

                            <label><b>Password</b></label>
                            <input type='password' placeholder='Enter Password' name='psw' required />

                            <label><b>Confirm Password</b></label>
                            <input type='password' placeholder='Re Enter Password' name='psw_re' required />

                            <button type='submit'>Signup</button>
                            <label>
                                <input type='checkbox' defaultChecked />Remember me
                            </label>
                        </div>

                        <div className={styles.container} style={{backgroundColor: '#f1f1f1'}}>
                            <button type='button' onClick={this.closeSignupModal.bind(this)} className={styles.cancelbtn}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}