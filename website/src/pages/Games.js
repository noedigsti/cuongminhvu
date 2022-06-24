import React from "react";
import Layout from "../layouts/Layout";

export default function Games() {
  return (
    <Layout title="Games">
      <div id="games-gallery">
        <div>
          <span>
            <h1>
              Doggo Let's Go <h2>as Developer/Programmer</h2>
            </h1>
            <a href="https://docs.google.com/presentation/d/15PH03cZcGr7CyMbNW4jlzK9aSfJMHost/edit?usp=sharing&ouid=116896269889510596721&rtpof=true&sd=true">
              Link to Presentation
            </a>
            <br/>
            <a href="https://drive.google.com/file/d/1DV1m42KSnt10SLd4_0aR8XciBqzCBSj9/view?usp=sharing">
              Link to Build
            </a>
            <div className="project-tags">
              <ul>
                <li>Single player</li>
                <li>Third&#45;person</li>
                <li>Side&#45;scrolling</li>
                <li>Mobile</li>
                <li>Adventure</li>
              </ul>
            </div>
            <img src="/ref/Doggo-Lets-Go.webp" alt="ref-Doggo-Lets-Go"></img>
            <img
              src="/ref/Doggo-Lets-Go-01.webp"
              alt="ref-Doggo-Lets-Go-01"
            ></img>
            <img
              src="/ref/Doggo-Lets-Go-02.webp"
              alt="ref-Doggo-Lets-Go-02"
            ></img>
            <img
              src="/ref/Doggo-Lets-Go-03.webp"
              alt="ref-Doggo-Lets-Go-03"
            ></img>
            <div className="video_wrapper">
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/e56ZF1aLxBc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </span>
          <br />
          <span>
            <h1>
              Buddy's Adventure <h2>as Programmer</h2>
            </h1>
            <div>
              <p>CHMP Games</p>
              <ul>
                <li>Henry Cassidy &#45; Animator/Artist</li>
                <li>Cuong Minh Vu &#45; Programmer</li>
                <li>Peter Geary &#45; Designer</li>
                <li>Chris Laouris &#45; Designer</li>
              </ul>
            </div>
            <div className="project-tags">
              <ul>
                <li>Single player</li>
                <li>Arcade</li>
                <li>Puzzle</li>
              </ul>
            </div>
            <img
              src="/ref/Buddys-Adventure-01.webp"
              alt="ref-Buddys-Adventure-01"
            ></img>
            <img
              src="/ref/Buddys-Adventure-02.webp"
              alt="ref-Buddys-Adventure-02"
            ></img>
            <img
              src="/ref/Buddys-Adventure-03.webp"
              alt="ref-Buddys-Adventure-03"
            ></img>
            <img
              src="/ref/Buddys-Adventure-04.webp"
              alt="ref-Buddys-Adventure-04"
            ></img>
            <img
              src="/ref/Buddys-Adventure-05.webp"
              alt="ref-Buddys-Adventure-05"
            ></img>
            <img
              src="/ref/Buddys-Adventure-06.webp"
              alt="ref-Buddys-Adventure-06"
            ></img>
            <img
              src="/ref/Buddys-Adventure-08.webp"
              alt="ref-Buddys-Adventure-08"
            ></img>
            <img
              src="/ref/Buddys-Adventure-07.webp"
              alt="ref-Buddys-Adventure-07"
            ></img>
            <div className="video_wrapper">
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/Tw8xTbjFJso"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </span>
          <br />
          <span>
            <h1>
              SHMUP &#40;WIP&#41; <h2>as Developer/Programmer</h2>
            </h1>
            <div className="project-tags">
              <ul>
                <li>Shoot 'em Up</li>
              </ul>
            </div>
            <img src="/ref/shmup-banner.webp" alt="ref-shmup-banner"></img>
            <img src="/ref/shmup-developer-1.webp" alt="ref-shmup-01"></img>
            <img src="/ref/shmup-developer-2.webp" alt="ref-shmup-02"></img>
            <img src="/ref/shmup-developer-3.webp" alt="ref-shmup-03"></img>
            <img src="/ref/shmup-developer-4.webp" alt="ref-shmup-04"></img>
          </span>
          <br />
          <span>
            <h1>
              BurgerCop &#40;WIP&#41; <h2>as Developer/Programmer</h2>
            </h1>
            <div className="project-tags">
              <ul>
                <li>Arcade</li>
                <li>Third&#45;person</li>
              </ul>
            </div>
            <img
              src="/ref/BurgerCop-developer-1.webp"
              alt="ref-BurgerCop-01"
            ></img>
            <img
              src="/ref/BurgerCop-developer-2.webp"
              alt="ref-BurgerCop-02"
            ></img>
            <img
              src="/ref/BurgerCop-developer-3.webp"
              alt="ref-BurgerCop-03"
            ></img>
            <img
              src="/ref/BurgerCop-developer-4.webp"
              alt="ref-BurgerCop-04"
            ></img>
            <img
              src="/ref/BurgerCop-developer-5.webp"
              alt="ref-BurgerCop-05"
            ></img>
          </span>
          <br />
          <span>
            <h1>Other concepts</h1>
            <img
              src="/ref/strategy-game-concept.gif"
              alt="ref-strategy-game-concept"
            ></img>
          </span>
        </div>
      </div>
    </Layout>
  );
}
