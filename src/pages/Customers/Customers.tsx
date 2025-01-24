import React, { useEffect } from "react"
import "./Customers.scss"


const Customers = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="customers-box" id="customers">
      <h2>Vásárlóknak</h2>
      <p>Üzleteinkben jelenleg csak készpénzzel tudnak fizetni</p>
      <p>Megértésüket köszönönjük szépen!</p>
    </div>
  )
}

export default Customers
