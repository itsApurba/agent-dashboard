import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoArrowBack } from "react-icons/io5";

const PropertyLeads = () => {
  return (
    <div>
      <div className=' m-6 p-6 bg-white shadow-md rounded-md flex flex-col gap-8 items-start'>
        <div className='rounded-full w-10 h-10 bg-red-600 flex items-center justify-center text-white'>
          <IoArrowBack className='w-6 h-6' />
        </div>

        <div className='flex flex-col lg:flex-row m-auto gap-4 w-full justify-evenly'>
          <div className='flex flex-col items-start gap-2 w-full'>
            <Label htmlFor='name' className='text-xl font-normal'>
              Name
            </Label>
            <Input type='text' id='name' placeholder='Elon Musk' />
          </div>
          <div className='flex flex-col items-start gap-2 w-full'>
            <Label htmlFor='location' className='text-xl font-normal'>
              Location
            </Label>
            <Input type='text' id='location' placeholder='Pretoria, South Africa' />
          </div>
          <div className='flex flex-col items-start gap-2 w-full'>
            <Label htmlFor='phone' className='text-xl font-normal'>
              Mobile Number
            </Label>
            <Input type='text' id='phone' placeholder='9062312237' />
          </div>
          <div className='flex flex-col items-start gap-2 w-full'>
            <Label htmlFor='email' className='text-xl font-normal'>
              Email
            </Label>
            <Input type='email' id='email' placeholder='musk@ms.com' />
          </div>
        </div>

        <div className='flex flex-col m-auto gap-4 w-full justify-evenly items-start'>
          <h3 className='text-xl text-red-600'>Personal Details</h3>
          <div className='flex flex-col md:flex-row gap-4 max-w-screen-md w-full'>
            <div className='flex flex-col items-start gap-2 w-full'>
              <Label htmlFor='varification' className='text-xl font-normal'>
                GST/RERA /Adaahar/pan number
              </Label>
              <Input type='text' id='verification' placeholder='123223123' />
            </div>
            <div className='flex flex-col items-start gap-2 w-full'>
              <Label htmlFor='doc' className='text-xl font-normal'>
                Upload Document proof
              </Label>
              <Input type='file' id='doc' />
            </div>
          </div>
        </div>

        <div className='flex flex-col m-auto gap-4 w-full justify-evenly items-start'>
          <h3 className='text-xl text-red-600'>Personal Details</h3>
          <div className='flex flex-col md:flex-row gap-4 max-w-lg w-full'>
            <div className='flex flex-col items-start gap-2 w-full'>
              <Label htmlFor='doc' className='text-xl font-normal text-left'>
                Upload A Company Incorporate/ PAN proof
              </Label>
              <Input type='file' id='doc' />
            </div>
          </div>
        </div>
        <div className='flex justify-center w-full'>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md">Save</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyLeads;
