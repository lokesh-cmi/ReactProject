import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About'
import TicTacToe from './TicTacToe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <div>
                <Nav />
                <Routes>
                    <Route path="/"  element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/TicTacToe" element={<TicTacToe/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}
export default App;