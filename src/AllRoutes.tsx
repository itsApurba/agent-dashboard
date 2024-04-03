import { Routes, Route, Navigate } from "react-router-dom";
import RecentlyViewed from "./pages/RecentlyViewed";
import PropertyLeads from "./pages/PropertyLeads";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/recently-viewed'}/>} />
      <Route path='/recently-viewed' element={<RecentlyViewed />} />
      <Route path='/property-leads' element={<PropertyLeads />} />
    </Routes>
  );
};

export default AllRoutes;
