import React from "react";
import styles from './stack.css'

const Stack = () => {
    return (
        <section className={styles.stack}>
          <div className={styles.itemContainer}>
            <h2 className={styles.itemTitle}>Навыки:</h2>
            <ul className={styles.itemList}>
              <li>HTML5</li>
              <li>CSS3, SCSS</li>
              <li>Валидная, адаптивная, кроссбраузерная верстка</li>
              <li>БЭМ</li>
              <li>JavaScript, ES6+</li>
              <li>React.js, Redux</li>
              <li>Next.js</li>
              <li>MaterialUi</li>
              <li>Firebase</li>
              <li>Gulp</li>
              <li>Webpack</li>
              <li>Git</li>
            </ul>
          </div>

          <div className={styles.itemContainer}>
            <h2 className={styles.itemTitle}>В процессе изучения:</h2>
            <ul className={styles.itemList}>
              <li>React.js</li>
              <li>Typescript.js</li>
            </ul>
          </div>

          <div className={styles.itemContainer}>
            <h2 className={styles.itemTitle}>В планах изучить:</h2>
            <ul className={styles.itemList}>
              <li>Node.js (backend)</li>
              <li>Базы данных</li>
            </ul>
          </div>
        </section>
    )
}

export default Stack;
