import React from 'react'
import Data from './Data'
import Card from './Card'
import style from '../../assets/css/all.css'

const Pendidikan = () => {
    return (
        <section className={`${style.resume} ${style.container} ${style.section}`} id="pendidikan">
            <h2 className={style.section__title}>Pendidikan & Pengalaman Kerja</h2>

            <div className={`${style.resume__container}`}>
                <div className={`${style.timeline__education}`}>
                    {Data.map((val, id) => {
                        if (val.category === "education") {
                            return (
                                <Card key={id} icon={val.icon} title={val.title} subtitle={val.subtitle} year={val.year} desc={val.desc} />
                            )
                        }
                    })}
                </div>

                <div className={`${style.timeline__experience}`}>
                    {Data.map((val, index) => {
                        if (val.category === "experience") {
                            return (
                                <Card key={index} icon={val.icon} title={val.title} subtitle={val.subtitle} year={val.year} desc={val.desc} />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pendidikan