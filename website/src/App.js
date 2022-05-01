import './App.css';
import './App.scss';
import profileImg from './profile.jpg';
// import {
  // BrowserRouter as Router, Route, Routes,
  // Routes,
  // Route,
// } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReactRoundedImage from "react-rounded-image";
import About from './pages/About';
import { useState } from 'react';
import Footer from './components/Footer';

export default function App() {
  let myName = new Audio("/CuongMinhVu.mp3");
  function sayMyName() {
    myName.play();
  }
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <HelmetProvider>
      <>
        <Helmet title='Cuong Minh Vu | Home'/>
        <div className="main-container">
          <div className="profileImg">
            <ReactRoundedImage 
              image={profileImg} 
              roundedColor="#04C2E0"
              imageWidth="150"
              imageHeight="150"
              roundedSize="7"
              borderRadius="70" 
            />
          </div>
          {/* Introduction */}
          <h1>
            Hello there!
          </h1>
          <h2>
            Welcome to my website!
          </h2>
          <p>
            My full name is <i>Cuong Minh Vu</i>
            <img id='speaker' src='/volume-up-4-48.png' alt='speaker' onClick={sayMyName}/>
          </p>
          <p>
            but you can just call me <i>Minh</i> :)
          </p>
          <p>
            Go check out on my social medias to see what I am up to and slide me a DM
          </p>
          {/* Media Links */}
          <div className="media-icons-wrapper">
            <ul className="media-icons">
              <li>
                <a 
                  className="link"
                  href="https://linkedin.com/in/cuongminhvu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/LinkedIn_logo.png" alt="linkedInIcon"/>
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://github.com/noedigsti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/GitHub-Mark-Light-64px.png" alt="gitHubIcon"/>
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://twitter.com/noedigsti_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons8-twitter-48.png" alt="twitterIcon"/>
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://github.com/noedigsti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons8-gmail-64.png" alt="gmailIcon"/>
                </a>
              </li>
            </ul>
          </div>
          {/* Details */}
          <p>
            Would you like to know more about me? Check out the tabs below!             
          </p>
          <div className='menu-wrapper'>
            <ul className='menu'>
              <li onClick={handleClick}>
                About me!
              </li>
              <li>
                My Projects
              </li>
              <li>
                My Resume
              </li>
              <li>
                Query
              </li>
            </ul>
          </div>
          {/* Tab Detail */}
          {isShow ? <About/> : null}
        </div>
        <Footer/>
      </>
    </HelmetProvider>
  );
}

