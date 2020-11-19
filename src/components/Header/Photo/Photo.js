import React, {useState} from "react";
import styles from './photo.css';
import {useSelector} from "react-redux";

const Photo = () => {
  const photoLinksArr = useSelector(state => state.profile.photoLinks);

    const [index, setIndex] = useState(0);//no Redux

    const handleClick = ()=> {
      if (index < (photoLinksArr.length-1)) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }

    console.log(photoLinksArr[1]);
    return (
        <div className={styles.photoContainer}
             onClick={() => handleClick()}
        >
            <img src={photoLinksArr[index]} alt="myPhoto"/>
            <span className={styles.photoCounter}>{index+1} из {photoLinksArr.length}</span>
        </div>
    )
}

export default Photo;