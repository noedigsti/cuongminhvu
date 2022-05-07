import React from "react";

export default function Links() {
  return (
    <section id="links">
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
              href="mailto:vuminhcuong999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons8-gmail-64.png" alt="gmailIcon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
