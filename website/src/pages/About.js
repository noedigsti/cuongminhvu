import { useState, useEffect } from "react";
import { Animated } from "react-animated-css";

export default function About() {
  const [toggle, setToggle] = useState(true)
  const clickHandler = () => {
    setToggle(!toggle)
  }
  useEffect(() => {}, [toggle])
  return (
    <div className="about">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        animationOutDuration={500}
        isVisible={toggle}
      >
        <p>hello world ;)</p>
      </Animated>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
