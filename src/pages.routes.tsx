import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ROUTES } from './constants/router.constants'
import { MainPage } from './pages/Main/main.page'

const PagesRoutes: React.FC  = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage/>}/>
      </Routes>
    </Router>
  )
}

export { PagesRoutes }
