import React from 'react'
import styles from './MainSection.module.css';
export default function MainSection(props) {
    return (
            <div className = {styles.container}>
            <span className={styles.header}>{props.topic}:</span> { props.body }
            </div>
            
    )
}
