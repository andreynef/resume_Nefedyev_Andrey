import React from 'react';
import styles from './Icons.css';


export const IconOpen =()=>{
  return <div className={styles.iconArrowDown}/>
}

export const IconClose =()=>{
  return <div className={styles.iconArrowUp}/>
}

export const IconDone =()=>{
  return <div className={styles.iconDone}/>
}

export const IconGithub =({link})=>{
  return <a className={styles.iconGithub} href={link} target="_blank" rel="noopener noreferrer"/>
}

export const IconWebsite =({link})=>{
  return <a className={styles.iconWebsite} href={link} target="_blank" rel="noopener noreferrer"/>
}

export const IconPause =()=>{
  return <div className={styles.iconPause}/>
}

export const IconFinalWork =()=>{
  return <div className={styles.iconGithub}/>
}


