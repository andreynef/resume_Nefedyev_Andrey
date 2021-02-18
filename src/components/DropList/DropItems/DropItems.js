import React from "react";
import styles from './DropItems.css';
import {
  IconClose,
  IconDone,
  IconGithub,
  IconOpen,
  IconPause,
  IconWebsite,
} from "../../Icons/Icons";
import site1 from '../../../img/reddit.png'
import site2 from '../../../img/html.png'
import site3 from '../../../img/affinage.png'
import site4 from '../../../img/news.png'
import site5 from '../../../img/arc.png'
import site6 from '../../../img/arc2.png'
import site7 from '../../../img/adhd.png'
import site8 from '../../../img/kon.png'
import site9 from '../../../img/unsplash.png'
import {useDispatch, useSelector} from "react-redux";
import {onTitleClickHandler} from "../../../store/actionCreators/onTitleClickHandler";

export const DropItems = ({item}) => {
  const dispatch = useDispatch();
  const droplistStateArr = useSelector(state => state.droplist);
  const levelOneArr = droplistStateArr.map(item=>item.title);

  const isLevelOne = (titleStr) => {
    const filteredItem = levelOneArr.filter(itemTitle => titleStr === itemTitle);
    return filteredItem[0] === titleStr;
  }

  let listEl;

  if (item.body) {
    listEl = (
      <li className={isLevelOne(item.title) ? styles.mainItemContainer : styles.subItemContainer}>
        <div
          className={isLevelOne(item.title) ? styles.mainItemTitleWrapper: styles.subItemTitleWrapper}
          onClick={() => {dispatch(onTitleClickHandler(item.id));}}
        >
          <h2 className={styles.itemTitle} style={{fontSize:item.title==='Портфолио'&&'23px', fontWeight:item.title==='Портфолио'&&600}}>{item.title} </h2>
          {item.title==='Портфолио'&&(
            <div className={styles.sitePics}>
            <img src={site1} alt={'pic'}/>
            <img src={site2} alt={'pic'}/>
            <img src={site3} alt={'pic'}/>
            <img src={site4} alt={'pic'}/>
            <img src={site5} alt={'pic'}/>
            <img src={site6} alt={'pic'}/>
            <img src={site7} alt={'pic'}/>
            <img src={site8} alt={'pic'}/>
            <img src={site9} alt={'pic'}/>
            </div>
          )}
          {item.done && item.finalWorkGithubUrl &&
            <a
              className={styles.link}
              href={item.finalWorkGithubUrl}
              target='_blank'
              rel="noopener noreferrer">
              Итоговая работа
            </a>
          }
          {item.done && item.githubLink &&
            <a
              className={styles.link}
              href={item.githubLink}
              target='_blank' rel="noopener noreferrer">
              Домашняя работа
            </a>
          }
          {item.done && <IconDone/>}
          {item.inProcess && <IconPause/>}
          {item.githubLink && <IconGithub/>}
          {item.open ? <IconOpen/> : <IconClose/>}
        </div>
        {item.open &&(
          <ul className={styles.subDroplistContainer}>
            {item.body.map((item, index)=>(
              <DropItems key={index} item={item}/>
            ))}
          </ul>
        )}
      </li>
    )
  }

  if (!item.body) {
    listEl = (
      <li className={styles.plainItemContainer}>
        <div className={styles.plainItemTitleWrapper}>
          {item.title &&
          <h3 className={styles.plainItemTitle}>
            {item.websiteLink ?
              <a href={item.websiteLink} target='_blank' rel='noopener noreferrer' className={styles.link}>{item.title}</a>
              : item.title
            }
          </h3>}
          {item.githubLink && <IconGithub link={item.githubLink}/>}
          {item.websiteLink && <IconWebsite link={item.websiteLink}/>}
          {item.done && <IconDone/>}
        </div>
        {item.position && <p className={styles.plainItemText}>Должность: {item.position}</p>}
        {item.yearStart && <p className={styles.plainItemText}>Год начала: {item.yearStart}</p>}
        {item.yearEnd && <p className={styles.plainItemText}>Год окончания: {item.yearEnd}</p>}
        {item.duties && <p className={styles.plainItemText}>Обязанности: {item.duties}</p>}
        {item.grade && <p className={styles.plainItemText}>Академическая степень: {item.grade}</p>}
        {item.faculty && <p className={styles.plainItemText}>Факультет: {item.faculty}</p>}
        {item.specialization && <p className={styles.plainItemText}>Специализация: {item.specialization}</p>}
        {item.about && <p className={styles.plainItemText}>{item.about}</p>}
        {item.sport && <p className={styles.plainItemText}>Спорт: {item.sport}</p>}
        {item.relax && <p className={styles.plainItemText}>Отдых: {item.relax}</p>}
        {item.freeTime && <p className={styles.plainItemText}>Свободное время: {item.freeTime}</p>}
        {item.courses && item.courses.map (item=><p className={styles.plainItemText}>{item}</p>)}
      </li>
    )
  }

  return listEl
}

