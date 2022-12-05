import React from "react";
import styles from "./blog.module.css";
import { useEffect, useState } from "react";

function Blog() {

  const [blogItems, setBlogItems] = useState([]);


  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/images?_quantity=10&_height=150&_width=150')
	.then(response => response.json())
  .then(response => setBlogItems(response.data))
  // .then(response => console.log(response))
  .then(console.log(blogItems))
	.catch(err => console.error(err));
  }, []);

  

  return (
    <div className={styles.blog}>
      <div className={styles.name}>
        <img alt="ava" src="ava-test.jpg" className={styles.ava} />
        <div className={styles.nameItems}>
          <div className={styles.nickWrapper}>
            <p className={styles.nick} onClick={()=>{console.log(blogItems)}}>Марина-марина</p>
          </div>
          <div className={styles.audience}>
            <p className={styles.audienceCount}>подписчики : 123</p>
            <p className={styles.audienceCount}>подписки : 123</p>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.description}>
          <p className={styles.descriptionName}>Марина Ерохина</p>
          <p className={styles.descriptionText}>
            Я известный блогер миллионер нумеролог и провидец в 8 поколении, мои
            хобби это скалолазанье, прыжки с паращьютом, полеты в космос и на
            луну
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.nickWrapper}>
            <p className={styles.nick}>Редактировать</p>
          </div>
          <ul className={styles.networks}>
            <li className={styles.networkItemWrapper}>
              <p className={`${styles.networkItem} ${styles.ig}`}>instagramm</p>
            </li>
            <li className={styles.networkItemWrapper}>
              <p className={`${styles.networkItem} ${styles.tg}`}>telegramm</p>
            </li>
            <li className={styles.networkItemWrapper}>
              <p className={`${styles.networkItem} ${styles.tw}`}>twitter</p>
            </li>
            <li className={styles.networkItemWrapper}>
              <p className={`${styles.networkItem} ${styles.wp}`}>what's upp</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={styles.addPostBlock}>
          <input placeholder="Введите что у вас происходит..." />
          <button>Опубликовать</button>
        </div>
      </div>
      <div className={styles.blogList}>
      {blogItems.map((item) => (
        <div key={item.title} className={styles.blogPost}>
            <h3>{item.title}</h3>
            <div className={styles.postWrapper}>
            <img alt="postImg" src={`${item.url}`}></img>
            <p>{item.description}</p>
            </div>
        </div>
        
        ))}
      </div>
    </div>
  );
}

export default Blog;
