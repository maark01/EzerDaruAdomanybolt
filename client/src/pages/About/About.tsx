import React, { useEffect } from "react"
import "../pages-styles.scss"


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="text-box" id="about">
      <h2>Rólunk</h2>
      <p>
        Az Ezer Daru Adományboltban kisebb lakberendezési tárgyaktól és sporteszközöktől kezdve a ruhákig, ékszerekig és régiségekig mindent megtalálsz, ami másnak már nem kellett, de neked még hasznos lehet. <br />
        Célunk az újrafelhasználás, hogy neked ne kelljen kidobnod, hogy másnak meg ne kelljen újat vennie.
      </p>
    </div>
  )
}

export default About
