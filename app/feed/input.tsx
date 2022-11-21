import {PhotoIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

const Input = () => {
    return (
      <div className=" flex border-solid border-t-0 border-x-0 border-gray-200 p-3 space-x-3">
        <img src='/user_image_default.png' className="h-11 w-11 rounded-full coursor-pointer hover:brightness-95" alt="user-img"/>
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 p-0" rows={2} placeholder="What's happening?"></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
                <div className="flex">
                    <PhotoIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
                </div>
                <button className="border-0 bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
            </div>
        </div>
      </div>
    );
  }

  export default Input