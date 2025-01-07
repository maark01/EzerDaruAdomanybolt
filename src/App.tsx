import React, { useState } from 'react'
import { PagesContextDefaults } from './contexts/PagesContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const App = () => {

  const [pages] = useState(PagesContextDefaults.value)
  const router = createBrowserRouter(pages)

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
