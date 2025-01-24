import React, { useState, useEffect, useContext } from 'react'
import './News.scss'


const News = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  return (
      <div className='text-center news-box' id='news'>
      <h2>Hírek</h2>
      <h3>Megnyitottuk második üzletünket!</h3>
      <p>Ezúton szeretnénk tájékoztatni a kedves publikumot, hogy megnyitottuk második üzletünket Nemes utcában Pestszentimre szívében!</p>
    </div>
  )
}

export default News
