import React, { useEffect } from "react"
import "../pages-styles.scss"


const Founders = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="text-box" id="founders">
      <h2>Adományozóknak</h2>
      <p>
        Amit fogadunk: bútorokon kívül gyakorlatilag mindent, viszont szeretnénk megkérni, hogy olyan dolgot hozz csak, ami még használható. <br/>
        Ruhából csak tisztát és nem szakadtat tudunk fogadni.
      </p>
    </div>
  )
}

export default Founders
