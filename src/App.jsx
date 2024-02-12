
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Edit from './pages/Edit'


function App() {

  return (
    <>
      <h1>Meme Generator</h1>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path="/edit/:url" element = {<Edit/>} />
    </Routes>
    </>
  )
}

export default App
