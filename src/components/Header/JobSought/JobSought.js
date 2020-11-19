import React from "react";
import styles from './jobSought.css';

const JobSought = () => {
    return (
        <section className={styles.jobSoughtContainer}>
            <h1 className={styles.jobSoughtTitle}>Соискаемая должность</h1>
            <p className={styles.jobSoughtText}>Front-end developer <br/> JavaScript developer</p>
            <p className={styles.jobSoughtText}>Нефедьев Андрей Сергеевич</p>
        </section>
    )
}

export default JobSought;