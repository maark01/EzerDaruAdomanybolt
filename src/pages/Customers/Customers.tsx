import React, { useEffect } from "react"
import "../pages-styles.scss"


const Customers = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="text-box" id="customers">
      <h2>Vásárlóknak</h2>
      <p>Üzleteinkben jelenleg csak készpénzzel tudnak fizetni</p>
      <p>Megértésüket köszönönjük szépen!</p>
      {/*   <p>
        Jelenleg csak tavaszi és nyári ruházatokat tudunk fogadunk, mint felnőtt és gyermek ruházatból adományként. <br />
      </p>
      <p>
        Megértésüket köszönönjük szépen!
      </p> */}
    </div>
  )
}

export default Customers
