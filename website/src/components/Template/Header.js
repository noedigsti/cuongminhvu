import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../../profile.jpg";

export default function Header() {
  let myName = new Audio("/CuongMinhVu.mp3");
  function sayMyName() {
    myName.play();
  }
  const navigate = useNavigate();
  return (
    <section id="intro">
      <h2 style={{ padding: 0, fontSize: 12 }}>
        THIS SITE IS UNDER CONTRUCTION! 🔨
      </h2>
      <div className="profileImg">
        <img
          src={profileImg}
          alt="profileImg"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        ></img>
      </div>
      {/* Introduction */}
      {/* Move stylings from css to here */}
      <h1>Hello there!</h1>
      <h2>Welcome to my website</h2>
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
    </section>
  );
}
