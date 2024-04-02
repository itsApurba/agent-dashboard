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
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          // varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          // varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
        <Property
          image={{ src: "https://picsum.photos/500/300", alt: "image" }}
          varified={true}
          agentName='Prakash Groups'
          price={180000}
          location='Jalahalli , 3 road near down road , Bangalore'
          type='Apartment'
          area={1000}
          bath={2}
          bedrooms={3}
          userName='Ramu Ram'
        />
      </div>
    </>
  );
}

export default App;
