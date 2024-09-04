import { Link, Outlet } from "react-router-dom";
import "../components/styles/Star.css";

const StarPage = () => {
  return (
    <div>
      <div className="star__nav">
        <Link to="/star/senses">Senses</Link>
        <Link to="/star/colours">Colours</Link>
        <Link to="/star/shapes">Shapes</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default StarPage;
