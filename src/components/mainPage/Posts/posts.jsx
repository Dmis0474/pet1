import React from "react";
import styles from "./posts.module.css";
import { useState, useEffect } from "react";

const Posts = (props) => {
  const LOREM =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, nemo enim recusandae veritatis totam porro itaque error blanditiis temporibus! Numquam possimus qui cupiditate quae temporibus dolor veniam ipsa magnam quod?".split(
      " "
    );

  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=100")
    .then((response) => response.json())
    .then((response) => getData(response));
  }, []);

  const getData = (data) => {
    setDataArr(data);
    console.log(data)
  };

  return (
    <div className={styles.postContainer}>
      {dataArr.map((item, i, arr) => {
        if (i < 98) {
          return (
            <div key={item.id} className={styles.post}>
              <div className={styles.imgWrapper}>
                <img
                  src={arr[i].download_url}
                  alt="ava"
                  className={`${styles.postsPictures} ${styles.largePicture}`}
                />
                <img
                  src={arr[i + 1].download_url}
                  alt="ava"
                  className={`${styles.postsPictures} ${styles.firstSmallPicture}`}
                />
                <img
                  src={arr[i + 2].download_url}
                  alt="ava"
                  className={`${styles.postsPictures} ${styles.secondSmallPicture}`}
                />
              </div>
              <p>{[...LOREM].splice(0, Math.random() * 26 + 1).join(" ")}</p>
              <div className={styles.postButtons}>
                <p>1</p>
                <button
                  className={`${styles.postButton} ${styles.likes}`}
                ></button>
                <p>1</p>
                <button
                  className={`${styles.postButton} ${styles.comment}`}
                ></button>
                <p>1</p>
                <button
                  className={`${styles.postButton} ${styles.retweet}`}
                ></button>
                <p>1</p>
                <button
                  className={`${styles.postButton} ${styles.share}`}
                ></button>
              </div>
            </div>
          );
        }
        i += 2;
      })}
    </div>
  );
};

export default Posts;
