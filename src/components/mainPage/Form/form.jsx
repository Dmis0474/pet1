import React from "react";
import styles from "./form.module.css";

const Form = (props) => {
  return (
    <div >
     <form className={styles.mainPageForm}>
        <input className={styles.formInput} placeholder="Впишите новый пост..."></input>
        <button>add</button>
     </form>
    </div>
  );
};
export default Form;