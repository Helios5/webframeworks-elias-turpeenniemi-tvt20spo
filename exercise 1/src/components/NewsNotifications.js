import React from 'react'
import styles from './Newsnotification.module.css';

export default function NewsNotifications(props) {
    return (
        <div className ={ styles.container}>
        <span className={styles.header}>{props.topic}:</span> { props.body }
        </div>
    )
}
