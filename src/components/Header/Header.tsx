import logo from "../../assets/img/logo.png";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { FaUserCircle } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const navActive = (isActive: boolean) => {
  return isActive
    ? "bg-red-600 text-white flex items-center justify-center gap-2 font-semibold border-[1px] border-red-600 rounded-md py-3 px-1 hover:bg-red-600 hover:text-white transition-all"
    : "text-red-600 flex items-center justify-center gap-2 font-semibold border-[1px] border-black rounded-md py-3 px-1 hover:border-opacity-0 hover:bg-red-600 hover:text-white transition-all";
};

const Header = () => {
  return (
    <header className='py-6 px-4 bg-gray-200 shadow-lg w-full rounded-b-[40px]'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 w-full m-auto'>
        <div>
          <img src={logo} alt='Logo' />
        </div>
        <ul className='flex flex-wrap justify-center gap-4'>
          <li className='list-none'>
            <NavLink to='/recently-viewed' className={({ isActive }) => navActive(isActive)}>
              <FaEye /> Recently Viewed
            </NavLink>
          </li>
          <li className='list-none'>
            <NavLink to='/shortlist' className={({ isActive }) => navActive(isActive)}>
              <FaHeart /> Shortlist
            </NavLink>
          </li>
          <li className='list-none'>
            <NavLink to={"/my-listing"} className={({ isActive }) => navActive(isActive)}>
              <MdFormatListBulletedAdd /> My Listing
            </NavLink>
          </li>
          <li className='list-none'>
            <NavLink to={"/property-leads"} className={({ isActive }) => navActive(isActive)}>
              <FaAddressCard /> Property Leads
            </NavLink>
          </li>
          <li className='list-none'>
            <NavLink to={"/professional-leads"} className={({ isActive }) => navActive(isActive)}>
              <FaAddressCard /> Professional leads
            </NavLink>
          </li>
        </ul>
        {/* User Dropdown */}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className='flex gap-4 items-center justify-center'>
              <FaUserCircle className='w-8 h-8' />
              <p className='text-red-600 flex gap-2 items-center justify-center'>
                Hello, User <GrUserSettings />
              </p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
