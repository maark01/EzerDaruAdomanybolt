import React, { useEffect } from "react"
import "./Mission.scss"


const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="mission-box" id="mission">
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
