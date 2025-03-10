import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { Outlet } from 'react-router-dom';

//Reaproveitando componentes

function App() {
  return (

    <>
      <div className='app-body'>
        <Outlet />
      </div>
    </>

  )
}

export default App
