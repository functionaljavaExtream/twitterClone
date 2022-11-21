import Image from "next/image";
import SidebarMenu from "./sidebarMenu";
import {HomeIcon} from "@heroicons/react/24/solid";
import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon} from "@heroicons/react/24/outline";
import { truncate } from "fs";

export default function SidebarLayout() {
    return (
      <div className="hidden sm:flex flex-col p-2 xl:items-start fixed">
        {/** Twitter logo */}
          <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image alt= {"hello"} width={"50"} height={"50"} src={"https://help.twitter.com/content/dam/help-twitter/brand/logo.png"}></Image>
          </div>
        {/** Menu */}
          <div className="mt-4 mb-2.5 xl:item-start">
            <SidebarMenu Icon={HomeIcon} text={"Home"} active={true}/>
            <SidebarMenu Icon={HashtagIcon} text={"Explore"} />
            <SidebarMenu Icon={BellIcon} text={"Notification"} />
            <SidebarMenu Icon={InboxIcon} text={"Messages"} />
            <SidebarMenu Icon={BookmarkIcon} text={"Bookmarks"} />
            <SidebarMenu Icon={ClipboardIcon} text={"Lists"} />
            <SidebarMenu Icon={UserIcon} text={"Profile"} />
            <SidebarMenu Icon={EllipsisHorizontalCircleIcon} text={"More"} />
          </div>
        {/** Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
        {/** Mini-profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
          <img width={"50"} height={"50"} src='/user_image_default.png' className="h-10 w-10 rounded-full xl:mr-2"/>
          <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">Kim</h4>
              <p className="text-gray-500">@code</p>
          </div>
              <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
          
        </div>
      </div>
    );
  }