import { Route, Routes } from "react-router-dom";
//
import HomePage from "./Pages/HomePage";
//
import StarPage from "./Pages/StarPage";
import Senses from "./Pages/Senses";
import Colours from "./Pages/Colours";
import Shapes from "./Pages/Shapes";
//
import DiamondPage from "./Pages/DiamondPage";
import Animals from "./Pages/Animals";
import Place from "./Pages/Place";
import Objects from "./Pages/Objects";
//
import HeartPage from "./Pages/HeartPage";
import Planets from "./Pages/Planets";
//
import PageNotFound from "./Pages/PageNotFound";
//Subpages
import InteractiveEye from "./SubPages/InteractiveEye";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/star" element={<StarPage />}>
        <Route path="/star/senses" element={<Senses />} />
        <Route
          path="/star/senses/interactiveeye"
          element={<InteractiveEye />}
        />
        <Route path="/star/colours" element={<Colours />} />
        <Route path="/star/shapes" element={<Shapes />} />
      </Route>

      <Route path="/diamond" element={<DiamondPage />}>
        <Route path="/diamond/animals" element={<Animals />} />
        <Route path="/diamond/place" element={<Place />} />
        <Route path="/diamond/objects" element={<Objects />} />
      </Route>

      <Route path="/heart" element={<HeartPage />}>
        <Route path="/heart/planets" element={<Planets />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
