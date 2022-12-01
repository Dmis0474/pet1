import React from "react";
import styles from "./posts.module.css";
import { useState, useEffect } from "react";

const Posts = (props) => {
  
    const LOREM = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, nemo enim recusandae veritatis totam porro itaque error blanditiis temporibus! Numquam possimus qui cupiditate quae temporibus dolor veniam ipsa magnam quod?'.split(' ');
    
    

    const [dataArr, setDataArr ] = useState([])

    useEffect (() =>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((response) => {
        getData(response, 150)
        });
    },[])
    
    const getData = (data, dataLength) => {
        data.length = dataLength;
        setDataArr(data)
    }

    


  return <div className={styles.postContainer}>
    {dataArr.map((item, i, arr) => {
        if(i < 147) {
            
            return (
                <div key={item.title} className={styles.post}>
                    <div className={styles.imgWrapper}>
                    <img src={arr[i].url} alt="ava" className={`${styles.postsPictures} ${styles.largePicture}`} />
                    <img src={arr[i+1].url} alt="ava" className={`${styles.postsPictures} ${styles.firstSmallPicture}`} />
                    <img src={arr[i+2].url} alt="ava" className={`${styles.postsPictures} ${styles.secondSmallPicture}`} />
                    </div>
                    <p>{[...LOREM].splice(0,(Math.random()*26)+1).join(' ')}</p>
                    <div className={styles.postButtons}>
                        <button className={`${styles.postButton} ${styles.likes}`}></button>
                        <button className={`${styles.postButton} ${styles.comment}`}></button>
                        <button className={`${styles.postButton} ${styles.retweet}`}></button>
                        <button className={`${styles.postButton} ${styles.share}`}></button>
                    </div>
                </div>
              );
        }
        i+=2 
        })}
  </div>;
};

export default Posts;
