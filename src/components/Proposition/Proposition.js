import React from "react";
import styles from './proposition.css';

const Proposition = () => {
    return (
        <section className={styles.propositionContainer}>
            <p className={styles.propositionText}>
                Начинающий frontend-разработчик
                ищет организацию с которой будет расти профессионально,
                помогать расти компании, доставлять радость клиентам,
                создавая удобные програмные продукты.
            </p>

            <p className={styles.propositionText}>
                В IT сфере опыта работы нет, но есть желание развиваться в сфере web-разработки,
                изучать полезные технологии и углублять уже существующие знания.
            </p>
        </section>
    )
}

export default Proposition;