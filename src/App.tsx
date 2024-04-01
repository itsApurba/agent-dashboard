import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Property from "./components/Property/Property";

function App() {
  return (
    <>
      <Header />
      {/* Filters */}
      <Filters />
      {/* Properties */}
      <div className='grid gap-16 max-w-screen-2xl m-auto justify-center md:grid-cols-2 xl:grid-cols-3 px-8'>
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </div>
    </>
  );
}

export default App;
