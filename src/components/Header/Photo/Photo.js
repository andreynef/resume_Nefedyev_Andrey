import React, {useState} from "react";
import styles from './photo.css';
import img1 from '../../../img/1.jpg'
import img2 from '../../../img/2.jpg'
import img4 from '../../../img/4.jpg'
import img8 from '../../../img/8.jpg'
import img9 from '../../../img/9.jpg'
import img10 from '../../../img/10.jpg'

const Photo = () => {

  const photoLinksArr=[
    img1,
    img2,
    img4,
    img8,
    img10,
    img9,
  ]


  const [index, setIndex] = useState(0);//no Redux

    const handleClick = ()=> {
      if (index < (photoLinksArr.length-1)) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }

    console.log('photo 1 link:',photoLinksArr[0]);
    return (
        <div className={styles.photoContainer}
             onClick={() => handleClick()}
        >
            <img src={photoLinksArr[index]} alt="myPhoto" className={styles.img}/>
            <span className={styles.photoCounter}>{index+1} из {photoLinksArr.length}</span>
        </div>
    )
}

export default Photo;