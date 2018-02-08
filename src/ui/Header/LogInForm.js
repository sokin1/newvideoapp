import React from 'react'

import styles from './LogInForm.css'

export default class LogInForm extends React.Component {
    constructor(props) {
        super(props)
    }

    openLoginModal(e) {
        e.preventDefault()
        document.getElementById('modal').style.display='block'
    }

    closeLoginModal(e) {
        e.preventDefault()
        document.getElementById('modal').style.display='none'
    }

    render() {
        return(
            <div>
                <button onClick={this.openLoginModal.bind(this)} className={styles.loginBtn}>Login</button>
                <div id='modal' className={styles.modal}>
                    <span onClick={this.closeLoginModal.bind(this)} className={styles.close} title='Close Modal'>x</span>

                    <form className={styles.modalContent} method='post' action='/'>
                        <div className={styles.imgcontainer}>
                        </div>

                        <div className={styles.container}>
                            <label><b>Username</b></label>
                            <input type='text' placeholder='Enter Username' name='uname' required />

                            <label><b>Password</b></label>
                            <input type='password' placeholder='Enter Password' name='psw' required />

                            <button type='submit'>Login</button>
                            <label>
                                <input type='checkbox' defaultChecked />Remember me
                            </label>
                        </div>

                        <div className={styles.container} style={{backgroundColor: '#f1f1f1'}}>
                            <button type='button' onClick={this.closeLoginModal.bind(this)} className={styles.cancelbtn}>Cancel</button>
                            <span className={styles.psw}>Forgot <a href='#'>password?</a></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}