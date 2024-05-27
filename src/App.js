import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Webseries from './Webseries';
import MovieDetails from './MovieDetails';
import WebseriesDetail from './WebseriesDetail';
import End from './End';
const App = () => {
  return (
    <div className="overflow-y-hidden">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webseries" element={<Webseries />} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/webseries/:id" element={<WebseriesDetail/>} />
        </Routes>
        <End />
      </Router>
    </div>
  );
};

export default App;
