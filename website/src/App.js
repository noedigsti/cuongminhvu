import "./App.css";
import "./App.scss";
import profileImg from "./profile.jpg";
// import ReactRoundedImage from "react-rounded-image"; To be uninstalled
// import About from "./pages/About";
import { useState, useEffect } from "react";
import Footer from "./components/Template/Footer";
import { Link, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { useLocation } from 'react-router-dom';


export default function App({ titlePostfix }) {
  let myName = new Audio("/CuongMinhVu.mp3");
  function sayMyName() {
    myName.play();
  }
  const [display, setDisplay] = useState("none");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };
  const [opacity, setOpacity] = useState(1);
  const [style, setStyle] = useState("");
  const toggleVisibility = () => {
    if (display === "none") {
      setStyle("li_visited");
      setOpacity(1);
      setDisplay("");
      setTimeout(() => {
        // document.getElementById("content-wrapper").scrollIntoView({block: 'start'})
        document.getElementById("content").scrollIntoView()
      }, 700)
    } else {
      setStyle("");
      setOpacity(0);
      setTimeout(() => setDisplay("none"), 700);
      scrollToTop();
    }
  };
  const [title, setTitle] = useState("");
  useEffect(() => {
    titlePostfix ? setTitle(titlePostfix) : setTitle("");
  }, [titlePostfix]);
  
  // Wrap this inside a Layout
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <div className="main-container">
        <div className="profileImg">
          <a href="/"><img src={profileImg} alt="profileImg"></img></a>
        </div>
        {/* Introduction */}
        <h1>Hello there!</h1>
        <h2>Welcome to my website!</h2>
        <p>
          My name is <i>Cuong Minh Vu</i>
          <img
            id="speaker"
            src="/volume-up-4-48.png"
            alt="speaker"
            onClick={sayMyName}
          />
        </p>
        <p>
          but you can just call me <i>Minh</i> :)
        </p>
        <p>
          Go check out on my social medias to see what I am up to and slide me a
          DM
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
                <img src="/LinkedIn_logo.png" alt="linkedInIcon" />
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://github.com/noedigsti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/GitHub-Mark-Light-64px.png" alt="gitHubIcon" />
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://twitter.com/noedigsti_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons8-twitter-48.png" alt="twitterIcon" />
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://github.com/noedigsti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons8-gmail-64.png" alt="gmailIcon" />
              </a>
            </li>
          </ul>
        </div>
        {/* Tab Menu */}
        <p>
          Would you like to know more about me and my projects? Check out the
          tabs below!
        </p>
        <nav className="menu-wrapper">
          {/* Use map */}
          <ul className="menu">
            <li className={style} onClick={toggleVisibility}>
              <Link to="/About">About me!</Link>
            </li>
            <li>
              <Link to="/Projects">My Projects</Link>
            </li>
            <li>
              <Link to="/Resume">My Resume</Link>
            </li>
            <li>
              <Link to="/Query">Query</Link>
            </li>
          </ul>
        </nav>
        {/* Tab Content Detail */}
        <Outlet />
        <div className="content-wrapper">
          <div id="content" style={{ display, opacity }}>
            {/* <div className="content"> */}
            <p>hello world ;)</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos inventore quidem corrupti natus sapiente beatae
              doloremque aspernatur repellendus asperiores aperiam unde, in
              maiores qui rem ut officia suscipit rerum molestiae?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos inventore quidem corrupti natus sapiente beatae
              doloremque aspernatur repellendus asperiores aperiam unde, in
              maiores qui rem ut officia suscipit rerum molestiae?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos inventore quidem corrupti natus sapiente beatae
              doloremque aspernatur repellendus asperiores aperiam unde, in
              maiores qui rem ut officia suscipit rerum molestiae?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos inventore quidem corrupti natus sapiente beatae
              doloremque aspernatur repellendus asperiores aperiam unde, in
              maiores qui rem ut officia suscipit rerum molestiae?
            </p>
            <p>hello world ;)</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
