// import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
// import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from "../ui/dropdown-menu";
// import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Filter from "./Filter";

const Filters = () => {
  const cities = ["", "kolkata", "bangalore", "mumbai"];
  const [city, setCity] = useState("");
  const buyRents = ["", "buy", "rent"];
  const [buyRent, setBuyRent] = useState("");
  const residentials = ["", "residential", "commercial"];
  const [residential, setResidential] = useState("");

  return (
    <div className='flex gap-4 w-max m-auto my-5'>
      <Filter name='City' items={cities} position={city} setPosition={setCity} />
      <Filter name='Buy/Rent' items={buyRents} position={buyRent} setPosition={setBuyRent} />
      <Filter name='Residential' items={residentials} position={residential} setPosition={setResidential} count={343} />
    </div>
  );
};

export default Filters;
