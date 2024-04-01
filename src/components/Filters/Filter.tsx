import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from "../ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
const Filter = ({
  name,
  items,
  position,
  setPosition,
  count,
}: {
  name: string;
  items: string[];
  position: string;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  count?: number;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='flex items-center capitalize gap-1'>
          {name} {position !== "" ? `: ${position}` : ""}
          {count && <p className='text-red-600 font-semibold'>{`(${count})`}</p>}
          <IoIosArrowDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 shadow-lg bg-white p-2'>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {items.map((item) => (
            <DropdownMenuRadioItem key={item} value={item}>
              {item === "" ? "None" : item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
