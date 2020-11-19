import React, {useState} from "react";
import styles from './SelfProjects.module.css';
import {IconVarious} from "../Icons/Icons";

const SelfProjects = () => {

    const [selfProjectsShow, setSelfProjectsShow] = useState({
        selfProjectsShow: false,
    })

    return (
        <section className={styles.selfProjects}>
            <div className={styles.selfProjectsTitleWrapper}
                 onClick={() => setSelfProjectsShow({selfProjectsShow: !selfProjectsShow.selfProjectsShow})}
            >
                <h2 className={styles.selfProjectsTitle}>Тестовые задания и соственные проекты</h2>

                <IconVarious obj={selfProjectsShow}/>
            </div>

            {
                selfProjectsShow.selfProjectsShow &&
                <ul>
                    <li className={styles.selfProjectsListItem}>
                        <a href="https://github.com/Coremotor/test-task-frontend-js">Тестовое задание Frontend Vanila JS</a>
                    </li>

                    <li className={styles.selfProjectsListItem}>
                        <a href="https://github.com/Coremotor/test-task-frontend-js">Тестовое задание Frontend React JS</a>
                    </li>

                    <li className={styles.selfProjectsListItem}>
                        <a href="https://github.com/Coremotor/test-task-frontend-react-redux">Тестовое задание Frontend React JS, Redux</a>
                    </li>

                    <li className={styles.selfProjectsListItem}>
                        <a href="https://github.com/Coremotor/test-task-frontend-citrus">Тестовое задание по HTML верстке</a>
                    </li>

                    <li className={styles.selfProjectsListItem}>
                        <a href="https://github.com/Coremotor/pet-project-xe-calc-js">Pet project: Калькулятор хлебных единиц</a>
                    </li>

                    <li className={styles.selfProjectsListItem}>
                        <a href="https://github.com/Coremotor/pet-project-resume-site">Pet project: Сайт-резюме</a>
                    </li>
                </ul>
            }
        </section>
    )
}

export default SelfProjects;
