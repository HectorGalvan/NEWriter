import './App.css';
import {BrowserRouter as Router, Routes, Route,  NavLink} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Premium from './Pages/Premium';

function App() {
  return (
    <div>
       <Router>
        <div className='App'>
          <NavLink  className='content' exact="true" activeClassName = "active" to="/"> Home</NavLink>
          <NavLink  className='content' activeClassName="active" to="/about">About</NavLink>
          <NavLink  className='content' activeClassName="active" to="/premium">Premium</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/premium" element={<Premium />}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
