import React from 'react'
import TentangBox from './TentangBox'
import style from '../../assets/css/all.css'
import About from '../../assets/foto.svg'
import CV from '../../assets/file/CV.pdf'

const Tentang = () => {
  return (
    <section className={`${style.tentang} ${style.container} ${style.section}`} id="tentang">
      <h2 className={style.section__title}>Tentang Saya</h2>

      <div className={`${style.tentang__container} ${style.grid}`}>
        <img src={About} alt="" className={style.tentang__img} width="150px" />

        <div className={`${style.tentang__data} ${style.grid}`}>
          <div className={style.tentang__info}>
            <p className={style.tentang__description}>
              Halo, perkenalkan nama saya Arya Dwi Aditiya. Saya lulusan Diploma Teknik Informatika Universitas Dian Nuswantoro. Saya sangat tertarik pada dunia IT dan ingin terus mengembangkan skill untuk menjadi seorang yang profesional dalam dunia IT. Dalam dunia IT ada beberapa bidang yang saya minati yaitu sebagai IT Support, Web/Mobile Developer dan Network Administrator.
            </p>
            <a href={CV} className={style.btn}>Download CV</a>
          </div>
          <div className={`${style.tentang__skills} ${style.grid}`}>
            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>HTML/CSS</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>JavaScript</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>Bootstrap</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>JQuery</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>PHP</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>Laravel</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>Node JS</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>Flutter</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>MySQL</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>Microsoft SQL Server</h3>
              </div>
            </div>

            <div className={style.skills__data}>
              <div className={style.skills__title}>
                <h3 className={style.skills__name}>Networking</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TentangBox />
    </section>
  )
}

export default Tentang