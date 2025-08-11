import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'

function App() {
  

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
