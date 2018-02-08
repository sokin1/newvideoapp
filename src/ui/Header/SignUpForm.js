import React from 'react'

import styles from './SignUpForm.css'

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
    }

    openSignupModal(e) {
        e.preventDefault()
        document.getElementById('id01').style.display='block'
    }

    closeSignupModal(e) {
        e.preventDefault()
        document.getElementById('id01').style.display='none'
    }

    render() {
        return(
            <div>
                <button onClick={this.openSignupModal.bind(this)}>Signup</button>
                <div id='id01' className={styles.modal}>
                    <form className={styles.modalContent} action='/'>
                        <span onClick={this.closeSignupModal.bind(this)} className={styles.close} title='Close Modal'>X</span>

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