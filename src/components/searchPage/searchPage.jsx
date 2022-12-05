import React from "react";
import styles from "./searchPage.module.css";
import { useState, useEffect } from "react";

function SearchPage() {

  const [formPosition, setFormPosition] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    if(searchPhrase === '') {
        setFormPosition(styles.moveDown)
    }
  }, [searchPhrase]);


    const moveFormUp = (e) => {
        e.preventDefault();
        setFormPosition(styles.moveUp)
    }

    const searchListener = (e) => {
        setSearchPhrase(e.target.value) 
    console.log(searchPhrase)
    }

  return (
    <div className={styles.searchPage}>
      <form className={`${styles.form} ${formPosition}`}>
        <input type="text" className={styles.input} value={searchPhrase} onChange={(e) => {searchListener(e);
             moveFormUp(e)}}/>
        <div className={styles.buttons}>
          <button className={styles.button} >Поиск по дуалам</button>
          <button className={styles.button}>Поиск по блогам</button>
        </div>
      </form>
    </div>
  );
}

export default SearchPage;
