import React from 'react'
import style from '../../assets/css/all.css'
import Scroll from './Scroll'
import Sosial from './Sosial'
import Typewriter from "typewriter-effect"
import Foto from '../../assets/foto.svg'

const Beranda = () => {
  return (
    <section className={`${style.beranda} ${style.container}`} id="beranda">
      <div className={style.intro}>
        <img src={Foto} alt="Foto" className={style.beranda__img}/>
        <h1 className={style.beranda__nama}>Arya Dwi Aditiya</h1>
        <span className={style.beranda__edukasi}> 
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["I'm IT Developer at Rumah Sakit Islam Kendal.", "I'm Mobile Developer at Amanah Ekspedisi.", "I'm Freelancer at Waroeng Service Semarang."]
            }}
          />
        </span>

        <Sosial />

        <a href="https://api.whatsapp.com/send/?phone=6281575644182" className={style.btn}>Hire Me</a>

        <Scroll />
      </div>
    </section>
  )
}

export default Beranda