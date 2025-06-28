// import React from 'react'
// import { Link} from 'react-router-dom'

// const Nav = () => {
//   return (
//     <div className='nav'>
//     <h1>we are superhuman </h1>
//     <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/quiz">Quiz</Link></li>
//         <li><Link to="/signin">SignIn</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
//          <li><Link to="/python">python</Link></li>

//     </ul>
//     </div>
//   )
// }

// export default Nav
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // CSS file for styling

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="logo">🚀 Superhuman</div>
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
