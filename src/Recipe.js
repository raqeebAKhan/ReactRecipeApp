import React from 'react';
import style from './recipe.module.css';
import { FaRegClock } from "react-icons/fa";


export default function Recipe({url, image, title, time, cuisineType}) {
  return (
    <div className={style.recipe} onClick={()=>{
        window.open(url);
    }}>
        <img className={style.image} src={image} alt=""/>
        <h1>{title}</h1>
        <p><FaRegClock/> {time} mins</p>   <p>Cuisine: {cuisineType}</p>
    </div>
  )
}

