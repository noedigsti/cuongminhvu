import './App.css';
import profileImg from './profile.jpg';
import {
  BrowserRouter as Router,
  // Routes,
  // Route,
} from 'react-router-dom'
import ReactHelmet from 'react-helmet';
import ReactRoundedImage from "react-rounded-image";

export default function App() {
  return (
    <Router>
      <ReactHelmet title='Cuong Minh Vu | Home'/>
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
          <h1>
            Hello there!
          </h1>
          <h2>
            Welcome to my website!
          </h2>
          <p>
            My name is Cuong Minh Vu
          </p>
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
            </ul>
          </div>
      </div>
    </Router>
  );
}

