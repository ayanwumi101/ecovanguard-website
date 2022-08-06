import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Blog from './Pages/Blog/Blog'
import Gallery from './Pages/Gallery/Gallery'
import SideMenu from './SideMenu/SideMenu'



const App = () => {
  return (
    <div>
      <Router>
        <SideMenu />
        <Routes>
          <Route exact path='/' element={<Blog />} />
          <Route path='/gallery' element={<Gallery />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App