import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Property = ({
  varified,
  image,
  bedrooms,
  bath: bath,
  area,
  type,
  price,
  agentName,
  location,
  userName,
}: {
  varified?: boolean;
  image: { src: string; alt?: string };
  bedrooms: number;
  bath: number;
  area: number;
  type: string;
  price: number;
  agentName: string;
  location: string;
  userName: string;
}) => {
  return (
    <div className='p-3 border-[1px] border-red-600 rounded-md w-full'>
      <div className='w-full relative'>
        <img className='m-auto rounded-md' src={image.src} alt={image.alt || "image"} />
        {varified && (
          <div className='text-sm flex items-center justify-center gap-1 px-4 rounded-r-full absolute top-2 bg-green-600 text-white'>
            Verified
            <MdOutlineVerifiedUser />
          </div>
        )}
        <div className='flex gap-3 absolute bottom-2 left-2 text-white'>
          <div className='flex items-center justify-center gap-1 '>
            <IoBedOutline className='w-6 h-6' /> <p className='text-xs'>{bedrooms}</p>
          </div>
          <div className='flex items-center justify-center gap-1 '>
            <PiBathtub className='w-6 h-6' /> <p className='text-xs'>{bath}</p>
          </div>
          <div className='flex items-center justify-center gap-1 '>
            <LiaVectorSquareSolid className='w-6 h-6' /> <p className='text-xs'>{area} Sq.Fts</p>
          </div>
        </div>
        <div className='flex flex-col items-start absolute bottom-2 right-2 text-white'>
          <p className='text-xs font-semibold'>{type}</p>
          <p className='text-xl font-semibold font-sans'>
            {"₹"}
            {price}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-start gap-2'>
        <h3 className='text-xl font-semibold'>{agentName}</h3>
        <h3 className='flex items-center justify-center gap-1 opacity-60 text-sm'>
          <IoLocationOutline />
          {location}
        </h3>
        <div className='flex items-center justify-between w-full'>
          <div className='flex justify-center items-center gap-2'>
            <FaUserCircle className='w-6 h-6 border-[0.1rem] border-red-600 rounded-full' />
            <p className='text-sm'>{userName}</p>
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
