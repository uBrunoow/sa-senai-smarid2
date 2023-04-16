import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/navbar'
import Main from './components/Main-1/main-1'
import Main2 from './components/Main-2/main-2'
import Companies from './components/Companies/companies'
import Features from './components/Features/features'
<<<<<<< HEAD
import Welcome from './components/Welcome/welcome'
=======
import Tellmewhy from './components/Tellmewhy/tellmewhy'
import Features2 from './components/Features-2/features-2'
>>>>>>> 2ae87b1413d09d446d7417c88b0fb3d767afcab0
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div> 
        <Navbar />
        <Main />
        <Main2 />
        <Companies />
        <Features />
<<<<<<< HEAD
        <Welcome />
=======
        <Tellmewhy />
        <Features2 />
>>>>>>> 2ae87b1413d09d446d7417c88b0fb3d767afcab0
      </div>
    </div>
  )
}

export default App
