import React, { useState } from 'react'
import Menu from './Menu'
import style from '../../assets/css/all.css'

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    }
    return (
        <section className={`${style.portfolio} ${style.container} ${style.section}`} id="portfolio">
            <h2 className={style.section__title}>Portfolio</h2>

            <div className={style.portfolio__filters}>
                <span className={style.portfolio__item} onClick={() => setItems(Menu)}>Semua</span>
                <span className={style.portfolio__item} onClick={() => filterItem("Website")}>Website</span>
                <span className={style.portfolio__item} onClick={() => filterItem("Mobile")}>Mobile</span>
                <span className={style.portfolio__item} onClick={() => filterItem("Sertifikat")}>Sertifikat</span>
            </div>
            <div className={`${style.portfolio__container} ${style.grid}`}>
                {items.map((elem) => {
                    const { id, image, title, category, link, desc } = elem;
                    return (
                        <div className={style.portfolio__card} key={id}>
                            <div className={style.portfolio__thumbnail}>
                                <img src={image} className={style.portfolio__img} />
                                <div className={style.portfolio__mask}></div>
                            </div>
                            <span className={style.portfolio__category}>{category}</span>
                            <h3 className={style.portfolio__title}>{title}</h3>
                            <p className={style.portfolio__desc}>{desc}</p>
                            <a href={link}>
                                <i className={`${style.portfolio__button} icon-link`}></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio