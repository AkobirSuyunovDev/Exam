import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/Homepage.jsx";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch.jsx";
import NotFound from "./pages/Not Found/NotFound.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import "./components/i18n/i18n.jsx";
import { useTranslation } from "react-i18next";
import CourseDetailPage from "./pages/CoursesPage/params/CourseDetails.jsx";
import "./App.css";
import Loader from "./components/Loading/Loader.jsx";

const App = () => {
  const { t, i18n } = useTranslation();
  const body = document.querySelector("body");
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };
  dark ? body.classList.add("dark") : body.classList.remove("dark");
  const [read, setRead] = useState(false);
  const main = document.querySelector("main");
  const readMode = () => {
    setRead(!read);
  };
  // const {data, error, loading} = useFetch("./db.json")
  // if (loading) {console.error(error); return <Loader />};
  // if (error) return <NotFound />;
  return (
    <Router>
      <div className="body">
        <Navbar readMode={readMode} darkMode={darkMode} dark={dark} />
        <main className={"main"+read?"readMode":""}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
