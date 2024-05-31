import React from 'react'
import style from '../../assets/css/all.css'

const TentangBox = () => {
  return (
    <div className={`${style.tentang__boxes} ${style.grid}`}>
        <div className={style.tentang__box}>
            <i className={`${style.tentang__icon} icon-fire` }></i>
            <div>
                <h3 className={style.tentang__title}>4</h3>
                <span className={style.tentang__subtitle}>Project</span>
            </div>
        </div>
        <div className={style.tentang__box}>
            <i className={`${style.tentang__icon} icon-badge`}></i>
            <div>
                <h3 className={style.tentang__title}>4</h3>
                <span className={style.tentang__subtitle}>Sertifikat</span>
            </div>
        </div>
    </div>
  )
}

export default TentangBox