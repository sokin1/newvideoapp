import React from 'react'

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div id="signup">
                <form method='post' action='/signup'>
                    <label id="email">Email:</label>
                    <input type="text" id="email" name="email" />

                    <label id="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    <label id="password">Confirm Password:</label>
                    <input type="password" id="confirm_password" name="confirm_password" />

                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}