import React from 'react'
import style from '../../assets/css/all.css'

const Scroll = () => {
  return (
    <div className={style.scroll}>
        <a href="#tentang" className={style.mouse__wrapper}>
            <span className={style.beranda__scroll_nama}>Scroll Down</span>
            <span className={style.mouse}>
                <span className={style.wheel}></span>
            </span>
        </a>
    </div>
  )
}

export default Scroll