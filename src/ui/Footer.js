import React from 'react'

import styles from './Footer.css'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <footer className={styles.footer}>
                <h1>Footer</h1>
            </footer>
        )
    }
}