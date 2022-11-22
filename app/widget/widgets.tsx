'use client';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { useState } from "react";
import News from "./news";

const Widgets = ({newsResults}:any) => {
    const [articleNum, setArticleNum] = useState(3);
    return (
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
            <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
                <div className="flex items-center p-3 rounded-full">
                    <MagnifyingGlassIcon className="h-5 z-40 text-gray-500 ml-2" />
                    <input className="absolute rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search Twitter" />
                </div>
            </div>

            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4">What's happening</h4>
                {newsResults.articles.slice(0,articleNum).map((article: any)  => {
                    return (
                        <News key={article.title} article={article} />
                    )
                })}
                <button onClick={()=>setArticleNum(articleNum + 3)} className="bg-gray-100 text-blue-300 ml-2 pl-4 pb-3 hover:text-blue-400 border-none">Show more</button>
            </div>
            {/* <p>
                {newsResults.totalResults}
            </p> */}
        </div>
    )
}


export default Widgets