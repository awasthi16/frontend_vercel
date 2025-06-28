

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import Nav from './components/Nav'
// import Signup from './components/Signup'
// import Quiz from './components/Quiz';
// import Python from './components/Python';
// import Home from './components/Home';

// function App() {


//   return (
//     <>
//     <BrowserRouter>
//       <Nav/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<h1>this is about page</h1>}/>
//         <Route path='/python' element={<Python/>}/>
//         <Route path='/quiz' element={<Quiz/>}/>
//         <Route path='/signin' element={<h1>this is signin page</h1>}/>
//         <Route path='/signup' element={<Signup/>}/>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">🚀 Superhuman</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/python">Python</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
