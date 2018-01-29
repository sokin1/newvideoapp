import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Logo.css'

export default class Logo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.logo_image}>
                <Link to='/'>image</Link>
            </div>
        )
    }
}