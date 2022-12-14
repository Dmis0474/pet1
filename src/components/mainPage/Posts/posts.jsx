import React from "react";
import styles from "./posts.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getDataArray} from "../../../redux/actions/actionCreators"

const Posts = (props) => {
  const LOREM =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, nemo enim recusandae veritatis totam porro itaque error blanditiis temporibus! Numquam possimus qui cupiditate quae temporibus dolor veniam ipsa magnam quod?".split(
      " "
    );

   const [dataArr, setDataArr] = useState([]);
   const posts = useSelector((store) => store.posts.allPosts);
   const dispatch = useDispatch();
 

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=100")
    .then((response) => response.json())
    .then((response) => transferDataToRedux(response))
  }, []);

  
  const transferDataToRedux = (data) =>{
    dispatch(getDataArray(data))
   }

  const getData = (data) => {
    setDataArr(data);
    console.log(data)
  };

  return (
    <div className={styles.postContainer}>
      {posts.map((item, i, arr) => {
        if (i < arr.length) {
          return (
            <div key={item.id} className={styles.post}>
              <div className={styles.imgWrapper}>
                <img
                  src={item.download_url}
                  alt="ava"
                  className={`${styles.postsPictures} ${styles.largePicture}`}
                />
              </div>
              <p>{item.author}</p>
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

export default Posts ;

