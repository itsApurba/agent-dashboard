import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";




const Property = () => {
  return (
    <div className='p-3 border-[1px] border-red-600 rounded-md w-full'>
      <div className='w-full relative'>
        <img className='m-auto rounded-md' src='https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg' alt='image' />
        <div className='text-sm flex items-center justify-center gap-1 px-4 rounded-r-full absolute top-2 bg-green-600 text-white'>
          Verified
          <MdOutlineVerifiedUser />
        </div>
        <div className='flex gap-3 absolute bottom-2 left-2 text-white'>
          <div className='flex items-center justify-center gap-1 '>
            <IoBedOutline className='w-6 h-6' /> <p className='text-xs'>3</p>
          </div>
          <div className='flex items-center justify-center gap-1 '>
            <PiBathtub className='w-6 h-6' /> <p className='text-xs'>4</p>
          </div>
          <div className='flex items-center justify-center gap-1 '>
            <LiaVectorSquareSolid className='w-6 h-6' /> <p className='text-xs'>1600 Sq.Fts</p>
          </div>
        </div>
        <div className='flex flex-col items-start absolute bottom-2 right-2 text-white'>
          <p className='text-xs font-semibold'>Apartment</p>
          <p className='text-xl font-semibold font-sans'>{"₹"}18,00,000</p>
        </div>
      </div>
      <div className='flex flex-col items-start gap-2'>
        <h3 className='text-xl font-semibold'>Prakash Groups</h3>
        <h3 className='flex items-center justify-center gap-1 opacity-60 text-sm'>
          <IoLocationOutline />
          Jalahalli , 3 road near down road , Bangalore
        </h3>
        <div className='flex items-center justify-between w-full'>
          <div className='flex justify-center items-center gap-2'>
            <FaUserCircle className='w-6 h-6 border-[0.1rem] border-red-600 rounded-full' />
            <p className='text-sm'>Ramu Ram</p>
            <p className='text-xs opacity-70'>Listed 2 days ago</p>
          </div>
          <div className='flex items-center justify-center gap-2 text-red-600'>
            <GoHeart className='w-4 h-4' />
            <PiShareFat className='w-4 h-4' />
            <BsThreeDotsVertical className='w-4 h-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
