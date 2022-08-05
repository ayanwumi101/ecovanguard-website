import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Blog from './Pages/Blog/Blog'
import SideMenu from './SideMenu/SideMenu'



const App = () => {
  return (
    <div>
      <Router>
        <SideMenu />
        <Routes>
          <Route exact path='/' element={<Blog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App