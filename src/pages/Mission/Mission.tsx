import React, { useEffect } from "react"
import "../pages-styles.scss"


const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="text-box" id="mission">
      <h2>Társadalmi szerepvállalásunk</h2>
      <ul>
        <li>Környezetvédelem</li>
        <li>Továbbadományozás</li>
        <li>Szociális vásárlás</li>
      </ul>
    </div>
  )
}

export default Mission
