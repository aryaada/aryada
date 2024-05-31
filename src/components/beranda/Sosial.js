import React from 'react'
import style from '../../assets/css/all.css'

const Sosial = () => {
  return (
    <div className={style.beranda__sosial}>
        <a href="https://www.instagram.com/aryaaada/" className={style.beranda__sosial_link}>
            <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com/aryada26" className={style.beranda__sosial_link}>
            <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/aryada2610/" className={style.beranda__sosial_link}>
            <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://github.com/aryaada" className={style.beranda__sosial_link}>
            <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/aryaada/" className={style.beranda__sosial_link}>
            <i className="fa-brands fa-linkedin"></i>
        </a>
    </div>
  )
}

export default Sosial