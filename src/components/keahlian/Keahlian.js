import React from 'react'
import style from '../../assets/css/all.css'
import Image1 from "../../assets/network.svg"
import Image2 from "../../assets/web-dev.svg"
import Image3 from "../../assets/repair.svg"
import Image4 from "../../assets/mobile.svg"

const data = [
    {
        id: 1,
        image: Image1,
        title: "Networking",
        description: "Melakukan konfigurasi IP Address, DNS, Firewall, Routing dan WLAN pada Mikrotik.",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description: "Melakukan pembuatan website dan melakukan debugging jika terjadi error pada kode.",
    },
    {
        id: 3,
        image: Image3,
        title: "Hardware & Software Repairs",
        description: "Melakukan penggantian Hardware laptop yang mengalami kerusakan dan Melakukan Install Ulang Sistem Operasi windows.",
    },
    {
        id: 4,
        image: Image4,
        title: "Mobile Development",
        description: "Melakukan pembuatan Mobile Apps dan melakukan debugging jika terjadi error pada kode.",
    },
];

const Keahlian = () => {
  return (
    <section className={`${style.keahlian} ${style.container} ${style.section}`} id='keahlian'>
    <h2 className={style.section__title}>Keahlian</h2>

    <div className={`${style.keahlian__container} ${style.grid}`}>
        {data.map(({id, image, title, description}) => {
            return (
                <div className={style.keahlian__card} key={id}>
                    <img src={image} alt="" className={style.keahlian__img} width="150px"/>

                    <h3 className={style.keahlian__title}>{title}</h3>
                    <p className={style.keahlian__description}>{description}</p>
                </div>
            )
        })}
    </div>
    </section>
  )
}

export default Keahlian