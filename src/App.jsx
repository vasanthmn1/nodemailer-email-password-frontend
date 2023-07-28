import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <ToastContainer />
      <Layout />
    </>
  )
}

export default App
