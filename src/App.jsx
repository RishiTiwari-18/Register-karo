import React from 'react'
import Home from './pages/Home'
import FixedNav from './components/FixedNav'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='' >
      <FixedNav/>
      <Nav/>
      <Home/>
    </div>
  )
}

export default App