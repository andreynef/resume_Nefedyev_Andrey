import React from "react";
import styles from './footer.css';

export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <small className={styles.footerText}>&copy; Andrey Nefedyev 2020</small>

            <small className={styles.footerText}>
                <a className={styles.footerLink} href="https://github.com/andreynef/resume_Nefedyev_Andrey" target="_blank"
                   rel="noopener noreferrer">Код приложения-резюме на Github</a>
            </small>
        </footer>
    )
}
