import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../components/i18n/i18n.jsx";
import Lang from "./ChangeLang";
const lightlogo =
  "https://mkxftmuzrsovmeodqgfv.supabase.co/storage/v1/object/sign/Exam/Logo/Dark.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFeGFtL0xvZ28vRGFyay5wbmciLCJpYXQiOjE3MzgyNjk5MTcsImV4cCI6MTc2OTgwNTkxN30.qSDgF7vQm48raPnRKzGs5HugAYTtAWgGKyNnf-mHxmo";
const darklogo =
  "https://mkxftmuzrsovmeodqgfv.supabase.co/storage/v1/object/sign/Exam/Logo/Light.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFeGFtL0xvZ28vTGlnaHQucG5nIiwiaWF0IjoxNzM4MjY5OTUxLCJleHAiOjE3Njk4MDU5NTF9.-KzZB9gDy4CocGBj583F28d9t0pkuZ7HQGIJYaro66w";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container">
        <NavLink to="/">
          <img id="logo" src={props.dark ? darklogo : lightlogo} alt="" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/courses" className="coursesLink">Курсы</NavLink>
            </li>
            <li>
              <NavLink to="/about">О платформе</NavLink>
            </li>
            <li>
              <NavLink to="/support">Поддержка</NavLink>
            </li>
          </ul>
        </nav>
        <div className="btnSpan">
          <Lang />
          <button onClick={props.darkMode}>
            <svg
              width="20px"
              height="20px"
              fill="#000000"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <title>ic_fluent_dark_theme_24_regular</title>
                <desc>Created with Sketch.</desc>
                <g fill="none" fillRule="evenodd">
                  <g fill="" fillRule="nonzero">
                    <path d="m12 22c5.5228 0 10-4.4772 10-10s-4.4772-10-10-10-10 4.4772-10 10 4.4772 10 10 10zm0-1.5v-17c4.6944 0 8.5 3.8056 8.5 8.5 0 4.6944-3.8056 8.5-8.5 8.5z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button onClick={props.readMode}>
            <svg
              width="20px"
              height="20px"
              fill="#000000"
              viewBox="0 0 442.04 442.04"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M221.02 341.3c-49.708 0-103.21-19.44-154.71-56.22-38.502-27.494-62.266-54.733-63.259-55.881-4.068-4.697-4.068-11.669 0-16.367 0.993-1.146 24.756-28.387 63.259-55.881 51.505-36.777 105-56.219 154.71-56.219 49.708 0 103.21 19.441 154.71 56.219 38.502 27.494 62.266 54.734 63.259 55.881 4.068 4.697 4.068 11.669 0 16.367-0.993 1.146-24.756 28.387-63.259 55.881-51.503 36.779-105 56.22-154.71 56.22ZM29.64 221.02c9.61 9.799 27.747 27.03 51.694 44.071 32.83 23.361 83.714 51.212 139.69 51.212s106.86-27.851 139.69-51.212c23.944-17.038 42.082-34.271 51.694-44.071-9.609-9.799-27.747-27.03-51.694-44.071-32.829-23.362-83.714-51.212-139.69-51.212s-106.86 27.85-139.69 51.212c-23.944 17.038-42.082 34.269-51.694 44.071Z" />
              <path d="M221.02 298.52c-42.734 0-77.5-34.767-77.5-77.5s34.766-77.5 77.5-77.5c18.794 0 36.924 6.814 51.048 19.188 5.193 4.549 5.715 12.446 1.166 17.639s-12.447 5.714-17.639 1.166c-9.564-8.379-21.844-12.993-34.576-12.993-28.949 0-52.5 23.552-52.5 52.5s23.551 52.5 52.5 52.5c28.95 0 52.5-23.552 52.5-52.5 0-6.903 5.597-12.5 12.5-12.5s12.5 5.597 12.5 12.5c0 42.733-34.765 77.5-77.499 77.5Z" />
              <path d="M221.02 246.02c-13.785 0-25-11.215-25-25s11.215-25 25-25c13.786 0 25 11.215 25 25s-11.214 25-25 25Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
