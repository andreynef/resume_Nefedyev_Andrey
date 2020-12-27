import React, {useState} from "react";
import styles from './photo.css';
import img1 from '../../../img/1.jpg'
import img2 from '../../../img/2.jpg'
import img4 from '../../../img/4.jpg'
import img8 from '../../../img/8.jpg'
import img9 from '../../../img/9.jpg'
import img10 from '../../../img/10.jpg'

export const Photo = () => {

  const photoLinksArr=[
    img1,
    img2,
    img4,
    img8,
    img9,
  ]


  const [index, setIndex] = useState(0);//no Redux
  const [review, setReview] = useState(false);

    const handleClick = ()=> {
      setReview(true);
      if (index < (photoLinksArr.length-1)) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }

    return (
        <div className={review?styles.photoContainerReview:styles.photoContainer}
             onClick={() => handleClick()}
        >
            <img src={photoLinksArr[index]} alt="myPhoto" />
            <span className={styles.photoCounter}>{index+1} из {photoLinksArr.length}</span>
        </div>
    )
}