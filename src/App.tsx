import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Filters />
      <AllRoutes />
    </div>
  );
}

export default App;
