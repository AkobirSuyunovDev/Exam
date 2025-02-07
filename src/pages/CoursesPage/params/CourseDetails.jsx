import { useParams } from "react-router-dom";
import "./style.css";
import Loader from "../../../components/Loading/Loader";
import { useLocation } from "react-router-dom";

const CourseDetailPage = () => {
  const location = useLocation();
  const course = location.state;

  if (!course) {
    return <Loader />;
  }

  return (
    <div className="course-detail">
      <div className="course-header">
        <img src={course.image} alt={course.title} />
        <div className="course-info">
          <h1>{course.name}</h1>
          <ul>
            {course.description.ul.map((item, index) => (
              <li key={index}>{item.li}+☑️</li>
            ))}
          </ul>
          <span className="price">{course.price}</span>
          <button className="buy-btn">Купить курс</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
