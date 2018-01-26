import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <header className={styles.header} >
                <div id="logo_img">
                    <Link to='/'>image</Link>
                </div>
                <div id="login">
                    <form method='post' action='/signup'>
                        <label id="email">Email:</label>
                        <input type="text" id="email" name="email" />

                        <label id="password">Password:</label>
                        <input type="password" id="password" name="password" />

                        <input type="submit" value="Log Up" />
                    </form>
                </div>
            </header>
        )
    }
}