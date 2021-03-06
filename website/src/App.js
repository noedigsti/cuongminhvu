import "./App.css";
import "./App.scss";
import {
  // BrowserRouter as Router, Route, Routes,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Query from "./pages/Query";
import NotFound from "./pages/NotFound";
import Games from "./pages/Games";

const App = () => {
  // Wrap this inside a Layout
  return (
    <BrowserRouter>
      <Routes exact path="/">
        <Route index element={<Index/>} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Games" element={<Games />} />
        <Route path="Query" element={<Query />} />
        <Route path='*' element={<NotFound />} status={404} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
