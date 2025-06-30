// import React from 'react';
// import './Home.css';
// import image1 from '../assets/im1.jpg';
// import image2 from '../assets/im2.png';
// import demoVideo from '../assets/v1.mp4';

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* HERO SECTION */}
//       <section className="hero">
//         <div className="hero-text">
//           <h1>Code the Future.</h1>
//           <p>
//             We're not just writing code — we're building a digital legacy to lead and inspire the world.
//             Let's innovate, educate, and elevate — and yes, outperform even the best.
//           </p>
//           <button className="glow-button">🚀 Start Building</button>
//         </div>
//         <div className="hero-img">
//           <img
//             src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
//             alt="Animated programmer working"
//           />
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="features">
//         <h2>💡 Our Mission</h2>
//         <div className="cards">
//           <div className="card">
//             <h3>🔥 Code for Impact</h3>
//             <p>We craft intelligent software with global impact and local roots.</p>
//           </div>
//           <div className="card bounce-delay">
//             <h3>🚀 Empower Developers</h3>
//             <p>We teach, train, and transform minds into coding warriors.</p>
//           </div>
//           <div className="card bounce-late">
//             <h3>🌍 Outpace the World</h3>
//             <p>By building smarter, faster, and more scalable tech solutions.</p>
//           </div>
//         </div>
//       </section>

//       {/* MEDIA SECTION */}
//       <section className="media-section">
//         <h2>🎥 Explore Our Work</h2>
//         <div className="media-content">
//           <img src={image1} alt="Project 1" className="media-img" />
//           <img src={image2} alt="Project 2" className="media-img" />
//           <video controls className="media-video" poster={image1}>
//             <source src={demoVideo} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import './Home.css';
import image1 from '../assets/im1.jpeg';
import image2 from '../assets/im2.jpeg';
import demoVideo from '../assets/v1.mp4';

const Home = () => {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Code the Future.</h1>
          <p>
            We're not just writing code — we're building a digital legacy to lead and inspire the world.
            Let's innovate, educate, and elevate — and yes, outperform even the best.
          </p>
          <button className="glow-button">🚀 Start Building</button>
        </div>
        <div className="hero-img">
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Animated programmer working"
          />
        </div>
      </section>

      {/* MISSION CARDS */}
      <section className="features">
        <h2>💡 Our Mission</h2>
        <div className="cards">
          <div className="card">
            <h3>🔥 Code for Impact</h3>
            <p>We craft intelligent software with global impact and local roots.</p>
          </div>
          <div className="card bounce-delay">
            <h3>🚀 Empower Developers</h3>
            <p>We teach, train, and transform minds into coding warriors.</p>
          </div>
          <div className="card bounce-late">
            <h3>🌍 Outpace the World</h3>
            <p>By building smarter, faster, and more scalable tech solutions.</p>
          </div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="media-section">
        <h2>👨‍💻 Meet Our Team & Interns</h2>
        <div className="media-grid">
          <div className="media-card">
            <img src={image1} alt="Team Working Together" />
            <p>Core Team - Strategy & Innovation</p>
          </div>
          <div className="media-card">
            <img src={image2} alt="Coding Intern Session" />
            <p>Internship Batch - Coding in Action</p>
          </div>
          <div className="media-card video-card">
            <video controls poster={image1}>
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>🎬 Watch Our Team in Action</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
