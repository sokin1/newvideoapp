import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <header>
                <div id="logo_img">
                    <Link to='/'>image</Link>
                </div>
                <div id="login">
                    <form method='post' action='/signup'>
                        <label id="email">Email:</label>
                        <input type="text" id="email" name="email" />

                        <label id="password">Password:</label>
                        <input type="password" id="password" name="password" />

                        <label id="confirm_password">Confirm Password:</label>
                        <input type="password" id="confirm_password" name="confirm_password" />

                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            </header>
        )
    }
}