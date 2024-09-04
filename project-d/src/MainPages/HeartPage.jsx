import { Link, Outlet } from "react-router-dom";
import "../components/styles/Heart.css";

const HeartPage = () => {
  return (
    <div>
      <div className="heart__nav">
        <Link to="/heart/planets">Planets</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default HeartPage;
