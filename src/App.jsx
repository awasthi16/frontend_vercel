

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


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
// import Signup from './components/Signup';
import Quiz from './components/Quiz';
import Python from './components/Python';
import Home from './components/Home';
import Mysql from './Mysql';
import Electronics from './components/Electronics';
// import Signin from './components/Signin';
// import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/python' element={<Python />} />
         <Route path='/sql' element={<Mysql/>} />
        <Route path='/quiz' element={<Quiz />} />
             <Route path='/electronics' element={<Electronics />} />
        {/* <Route path='/signin' element={<Signin />} /> */}
        {/* <Route path='/signup' element={<Signup />} /> */}
        <Route path='*' element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
