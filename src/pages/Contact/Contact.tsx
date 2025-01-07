import React, { useEffect } from "react"
import "../pages-styles.scss"


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="text-box container-extand" id="contact">
      <div className="row">
        <div className="shop-info col-sm-12 col-md-4 col-lg-4">
          <div className="card">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10790.90578666109!2d19.1273204!3d47.4562716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c3d849874575%3A0xc9446e597122f6!2sEzer%20Daru%20Adom%C3%A1nybolt!5e0!3m2!1shu!2shu!4v1691872233398!5m2!1shu!2shu" min-width="25rem" height="auto" loading="lazy" >
            </iframe>
            <div className="card-body">
              <h5 className="card-title">1192 Budapest, Kós Károly tér 1</h5>
              <ul className="opening-hours-list mx-auto text-start">
                <li><b>Hétfő:</b> Zárva</li>
                <li><b>Kedd:</b> 12:00 - 18:00</li>
                <li><b>Szerda:</b> 10:00 - 18:00</li>
                <li><b>Csütörtök:</b> 10:00 - 18:00</li>
                <li><b>Péntek:</b> 10:00 - 18:00</li>
                <li><b>Szombat:</b> 10:00 - 13:00</li>
                <li><b>Vasárnap:</b> Zárva</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shop-phone col-sm-12 col-md-4 col-lg-4 p-3">
          <h3 className="my-2 text-center">Elérhetőségek</h3>
          <ul className="mx-auto text-center">
            <li><i className="fa-regular fa-envelope"></i>ezerdaruadomanybolt@gmail.com</li>
            <li><i className="fa-solid fa-phone-volume"></i> +3630 383 0022</li>
          </ul>
        </div>
        <div className="shop-info col-sm-12 col-md-4 col-lg-4">
          <div className="card">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.3537656066424!2d19.18505217673012!3d47.405040501874005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e90054efb51d%3A0x3b1d1158bb74bdb7!2sEzer%20Daru%20Adom%C3%A1nybolt!5e0!3m2!1shu!2shu!4v1730838436745!5m2!1shu!2shu" min-width="25rem" height="auto" loading="lazy" >
            </iframe>
            <div className="card-body">
              <h5 className="card-title">1188 Budapest, Nemes utca 12</h5>
              <ul className="opening-hours-list mx-auto text-start">
                <li><b>Hétfő:</b> 10:00 - 18:00</li>
                <li><b>Kedd:</b> 10:00 - 18:00</li>
                <li><b>Szerda:</b> 10:00 - 18:00</li>
                <li><b>Csütörtök:</b> 10:00 - 18:00</li>
                <li><b>Péntek:</b> 10:00 - 18:00</li>
                <li><b>Szombat:</b> 09:00 - 13:00</li>
                <li><b>Vasárnap:</b> Zárva</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact
