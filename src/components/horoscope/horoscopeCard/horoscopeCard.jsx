import React from "react";
import styles from "./horoscopeCard.css";
import classNames from 'classnames';

const HoroscopeCard = (props) => {
  
    return (
        <div className={`card ${props.header}`}>
           {props.header}
             <p className={'info'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci facilis dolorem velit, vitae numquam distinctio qui vel unde assumenda</p>

        </div>
    )
      

}

export default HoroscopeCard;