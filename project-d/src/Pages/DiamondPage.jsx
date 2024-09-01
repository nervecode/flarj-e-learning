import { Link, Outlet } from "react-router-dom";
import "../components/styles/Diamond.css";

const DiamondPage = () => {
  return (
    <div>
      <div className="diamond__nav">
        <Link to="/diamond/animals">Animals</Link>
        <Link to="/diamond/place">Place</Link>
        <Link to="/diamond/objects">Objects</Link>
      </div>

      <Outlet />
    </div>
  );                                               
};

export default DiamondPage;
