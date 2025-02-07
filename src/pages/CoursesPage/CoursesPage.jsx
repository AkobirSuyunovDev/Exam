import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../../components/i18n/i18n.jsx";
import { useTranslation } from "react-i18next";

const CoursesPage = () => {
  const { t, i18n } = useTranslation();
  const courses = t("courses", { returnObjects: true });
  const courseList = Array.isArray(courses) ? courses : [];
  return (
    <div className="courses">
      <h1>{t("catalog")}</h1>
      <div className="course-list">
        {courseList.map((course) => (
          <div key={course.id} className="course-card">
            <div className="svgbox">
              {}
            </div>
            <div className="course-info">
              <h2>{course.name}</h2>
              <p dangerouslySetInnerHTML={{ __html: course.p1 }}></p>
              <h3>{course.description.ultitle}</h3>
              <ul>
                {course.description.ul.map((item, index) => (
                  <li key={index}>{item.li}</li>
                ))}
              </ul>
              <p dangerouslySetInnerHTML={{ __html: course.p2 }}></p>
              <Link to={`/courses/${course.id}`} state={course} className="details-btn">
                {t("more")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
