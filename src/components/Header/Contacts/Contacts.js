import React from "react";
import styles from './contacts.css';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
                <a className={styles.phoneNumber} title="+7 (999) 879-29-87" href="tel:+79998792987"> </a>
                <a className={styles.email} title="andreynef@yandex.ru" href="mailto:andreynef@yandex.ru"> </a>
                <a className={styles.vk} href="https://vk.com/id3177378" target="_blank"
                   rel="noopener noreferrer"> </a>
                <a className={styles.wa} href="https://wa.me/+79998792987" target="_blank"
                   rel="noopener noreferrer"> </a>
                <a className={styles.vbr} href="viber://chat?number=%2B79998792987" target="_blank"
                   rel="noopener noreferrer"> </a>
                <a className={styles.tg} href="https://telegram.me/Nefedjev" target="_blank"
                   rel="noopener noreferrer"> </a>
                {/*<a className={styles.sk} href="skype:live:.cid.60c61dcbf3675d4?call" target="_blank"*/}
                {/*   rel="noopener noreferrer"> </a>*/}
        </section>
    )
}

export default Contacts;