import React, { useEffect } from 'react'
import './Founders.scss'


const Founders = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='founders-box' id='founders'>
      <h2>Adományozóknak</h2>
      <p>
        Alapvetően minden adománynak örülünk, hiszen amit mi nem tudunk hasznosítani, továbbítjuk más szervezeteknek. <br />
      </p>
      <p>
        Ezúton szeretnénk felhívni a figyelmet, hogy szakadt, koszos ruhaneműk, nem működő műszaki cikkek, törött játékok, repedt poharak -bögrék, penészes könyvek már nem kellenek senkinek, ezzel ne alázzuk meg magunkat és embertársainkat. <br />
      </p>
      <p>
        Sajnos hely hiányában bútor felajánlásokat nem tudunk fogadni, de igény esetén igyekszünk közvetíteni az érdeklődők között. <br />
        Adományokat hétközben  11-17 óra között fogadunk, raktározási nehézségeink miatt csak szezonális ruhákat, alkalmanként néhány szatyornyi, legfeljebb egy zsáknyi mennyiségben.
      </p>
      <p className='text-center'>Mindenkinek köszönjük a megértést és a támogatást!</p>
    </div>
  )
}

export default Founders
