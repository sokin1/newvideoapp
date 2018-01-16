import React from'react'
import styles from './styles.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <h1 className={styles.header}>Header</h1>
        )
    }
}