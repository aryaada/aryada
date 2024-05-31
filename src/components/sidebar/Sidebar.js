import React, { useState } from 'react'
import style from '../../assets/css/all.css'
import Logo from '../../assets/logo.svg'

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
  return (
    <>
        <aside className={toggle ? `${style.sidebar} ${style.show__menu}` : `${style.sidebar}`}>
            <a href='#beranda' className={style.nav__logo}>
                <img src={Logo} alt="" />
            </a>

            <nav>
                <div className={style.nav__menu}>
                    <ul className={style.nav__list}>
                    <li className={style.nav__item}>
                        <a href="#beranda" className={style.nav__link} data-label="Beranda">
                        <i className="icon-home"></i>
                        </a>
                    </li>
                    <li className={style.nav__item}>
                        <a href="#tentang" className={style.nav__link} data-label="Tentang">
                        <i className="icon-user-following"></i>
                        </a>
                    </li>
                    <li className={style.nav__item}>
                        <a href="#keahlian" className={style.nav__link} data-label="Keahlian">
                        <i className="icon-briefcase"></i>
                        </a>
                    </li>
                    <li className={style.nav__item}>
                        <a href="#pendidikan" className={style.nav__link} data-label="Pendidikan">
                        <i className="icon-graduation"></i>
                        </a>
                    </li>
                    <li className={style.nav__item}>
                        <a href="#portfolio" className={style.nav__link} data-label="Portfolio">
                        <i className="icon-layers"></i>
                        </a>
                    </li>
                    </ul>
                </div>
            </nav>

            <div className={style.nav__footer}>
            <span className={style.copyright}>Arya DA &copy; {new Date().getFullYear()}</span>
            </div>
        </aside>
        <div className={toggle ? `${style.nav__toggle} ${style.nav__toggle__open}` : `${style.nav__toggle}`} onClick={() =>showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
    </>
  )
}

export default Sidebar