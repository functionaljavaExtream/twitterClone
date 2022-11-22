import {SparklesIcon} from "@heroicons/react/24/outline";
import Input from "./input";
import Post from "./post";

const FeedLayout = () => {
    const posts = [
        {
            id: "1",
            name: "Kim JP",
            username: "@code",
            userImg: "/user_image_default.png" ,
            img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            text: "nice view!",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Kim JP",
            username: "@code",
            userImg: "/user_image_default.png" ,
            img: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            text: "nice!",
            timestamp: "2 days ago"
        }
    ]
    return (
      <div className="xl:ml-[370px] border-solid border-t-0 border-b-0 border-gray-200 xl:min-w-[600px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-solid border-t-0 border-x-0 border-gray-200 ">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
            <Input />
            {posts.map((post)=>(
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
  }

  export default FeedLayout