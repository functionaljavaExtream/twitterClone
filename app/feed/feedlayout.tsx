import {SparklesIcon} from "@heroicons/react/24/outline";
import Input from "./input";

const FeedLayout = () => {
    return (
      <div className="xl:ml-[370px] border-solid border-t-0 border-b-0 border-gray-200 xl:min-w-[600px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-solid border-t-0 border-x-0 border-gray-200 ">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <div>
            <Input />
        </div>
      </div>
    );
  }

  export default FeedLayout