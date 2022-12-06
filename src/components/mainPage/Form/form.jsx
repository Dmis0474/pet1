import React, { useState } from "react";
import styles from "./form.module.css";
import { useDispatch, useSelector } from "react-redux";
import {handleSubmit} from "../../../redux/actions/actionCreators"

const Form = (props) => {

  const posts = useSelector((store) => store.posts.allPosts);
  const dispatch = useDispatch();

  const[newPostText, setNewPostText] = useState('');

  const postListener = (e) =>{
    e.preventDefault();
    setNewPostText(e.target.value)
    console.log(newPostText)
  }

  const addPost = (newPostText, event) => {
    event.preventDefault();
    dispatch(handleSubmit(newPostText, event))
    setNewPostText('')
  }



  return (
    
    <div >
     <form className={styles.mainPageForm} onSubmit={(event) => addPost(newPostText, event)}>
        <input value={newPostText} className={styles.formInput} onChange={(e)=>postListener(e)} placeholder="Впишите новый пост..."></input>
        <button >add</button>
     </form>
    </div>
  
  );
  
};
export default Form;