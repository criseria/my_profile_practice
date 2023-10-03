import './App.css';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import contact from './Contact';
import home from './Home';
import about from './About';
import portfolio from './Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link as={Link} to="/">홈</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">나의 소개</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact">연락처</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/portfolio">포트폴리오 링크</Nav.Link>
          </Nav.Item>
        </Nav>
        
        <Routes>
          <Route path='/' Component={home}></Route>
          <Route path='/contact' Component={contact}></Route>
          <Route path='/about' Component={about}></Route>
          <Route path='/portfolio' Component={portfolio}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
