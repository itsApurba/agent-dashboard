import { Routes, Route, Navigate } from "react-router-dom";
import RecentlyViewed from "./pages/RecentlyViewed";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/recently-viewed'}/>} />
      <Route path='/recently-viewed' element={<RecentlyViewed />} />
    </Routes>
  );
};

export default AllRoutes;
