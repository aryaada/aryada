import React from 'react'
import style from '../../assets/css/all.css'

const Card = (props) => {
  return (
    <div className={style.timeline__item}>
      <i className={`${style[props.icon]} ${props.icon}`}></i>
      <span className={style.timeline__date}>{props.year}</span>
      <h3 className={style.timeline__title}>{props.title}</h3>
      <span className={style.timeline__subtitle}>{props.subtitle}</span>
      <div className={style.timeline__text}>
        {Array.isArray(props.desc) ?
          props.desc.map((line, index) => <p key={index}>{line}</p>) :
          <p>{props.desc}</p>
        }
      </div>
    </div>
  );
};


export default Card