import React, { useRef, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import Header from "../components/Template/Header";
import Links from "../components/Template/Links";
import Navigation from "../components/Template/Navigation";
import Footer from "../components/Template/Footer";
const Layout = (props) => {
  const contentScroll = useRef(null);
  useEffect(() => {
    contentScroll.current.scrollIntoView();
  }, [contentScroll]);
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Cuong Minh Vu"
        defaultTitle="Cuong Minh Vu"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <div id="wrapper">
        <Header />
        <Links />
        <Navigation />
        {/* Content section to another js */}
        <section id="content" ref={contentScroll}>
          {props.children ? (
            <div className="inner-content">{props.children}</div>
          ) : null}
        </section>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Layout.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Cuong Minh Vu's Personal Website",
};

export default Layout;
