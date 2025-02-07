import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <p>&copy; 2025 Online Courses. Все права защищены.</p>
        <nav>
          <a href="/privacy">Политика конфиденциальности</a>
          <a href="/terms">Условия использования</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
