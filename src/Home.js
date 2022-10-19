import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">Lokesh</h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/TicTacToe">TicTacToe</Link>
            </li>
          </ul>
        </div>
        <div className="search">
          <input
            className="srch"
            type="search"
            name=""
            placeholder="Type To text"
          />
          <a href="#">
            <button className="btn">Search</button>
          </a>
        </div>
      </div>
      <div className="content">
        <h1>
          Web Design & <br />{" "}
          <span style={{ color: "white" }}>Development</span> <br />
          Project
        </h1>
        <p className="par">
          this is a paragraph.
          <br /> lokesh comakeit part of xebia... <br />
          jjo hh ii h si a hf aif ahj{" "}
        </p>

        <button className="cn">
        <Link to="/About">Join Us</Link>
        </button>

        <div className="form">
          <h2>Login</h2>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button className="btnn">
          <Link to="/Todo">Login</Link>
          </button>
          <p className="link">
            Don't have an account <br />
            <a href="#">Sign up</a> Here
          </p>
          <p className="liw">Log in with</p>

          <div className="icons">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-google"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-skype"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
