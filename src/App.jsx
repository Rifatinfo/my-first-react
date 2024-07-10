import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  

  return (
    <>
      <h1>Explore React Core Concept</h1>
  
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
    </>
  )
}

export default App
