import React from "react";
import styles from "./horoscope.module.css";
import { useEffect } from "react";
import axios from 'axios';
import HoroscopeCard from "./horoscopeCard/horoscopeCard";

function Horoscope() {

    const zodiacSigns = {
        aries: 'aries',
        taurus: 'taurus',
        gemini: 'gemini',
        cancer: 'cancer',
        leo: 'leo',
        virgo: 'virgo',
        libra: 'libra',
        scorpio: 'scorpio',
        sagittarius: 'sagittarius',
        capricorn: 'capricorn',
        aquarius: 'aquarius',
        pisces: 'pisces'
    }

  const getHoroscope = (horoscopeSign) => {

    const options = {
      method: "POST",
      url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
      params: { sign: horoscopeSign,  day: "today" },
      headers: {
        "X-RapidAPI-Key": "e2fa5eb084msh76399b51c873873p1b1abdjsn6b2e082d2919",
        "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
      },
    };

    axios.request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className={styles.horoscopePages}>
      <h2 className={styles.header}>Гороскоп на сегодня</h2>
      <button onClick={() => getHoroscope('aries')}>touch me</button>
     
      <ul className={styles.signsList}>
      {Object.keys(zodiacSigns).map(sign => (
       <li key={sign} className={sign}>
        <HoroscopeCard header={zodiacSigns[sign]}/>
        </li> 
))}
      </ul>
      
    </div>
  );
}

export default Horoscope;
