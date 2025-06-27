

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav'
import Signup from './components/Signup'
import Quiz from './components/Quiz';

function App() {


  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<h1>this is home page</h1>}/>
        <Route path='/about' element={<h1>this is about page</h1>}/>
        <Route path='/contact' element={<h1>this is contact page</h1>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/signin' element={<h1>this is signin page</h1>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
