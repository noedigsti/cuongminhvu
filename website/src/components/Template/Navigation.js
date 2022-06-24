import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../data/routes";

export default function Navigation() {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const handleClick = (e) => {
    scrollToTop();
    for (let index = 0; index < routes.length; index++) {
      if (routes[index].label === e.target.className) {
        setTimeout(() => {
          navigate(routes[index].path);
        }, 300);
        // Set delay before changing page. This is an intentional decision
        // to keep the effect of scrolling up
      }
    }
  };
  return (
    <section id="navigation">
      <p>
        Would you like to know more about me and my projects? Check out the tabs
        below!
      </p>
      <nav className="menu-wrapper">
        <ul className="menu">
          {routes.filter((l) => !l.label.match("Query")).map((l) => (
              <li key={l.label} className={l.label} onClick={handleClick}>
                {l.label}
              </li>
            ))}
        </ul>
      </nav>
    </section>
  );
}
