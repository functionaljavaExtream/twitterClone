'use'

import SidebarLayout from "./sidebar/sidebarLayout";
import FeedLayout from "./feed/feedlayout";
import Widgets from "./widget/widgets";
import { ReactElement } from "react";

const getNewsData = async () => {
  const res = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json");

  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }



  return res.json();
}

const getUsersData = async () => {
    // who to follow section
    const res = await fetch("https://randomuser.me/api/?results=30&inc=name,login,picture");

    if(!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json()
}



export default async function Page() {
   const newsResults = await getNewsData();
   const randomUsersData = await getUsersData();
  return (
    <div>
      <main className="flex min-h-screen mx-auto">
        {/* side bar */}
        <SidebarLayout />
        {/* feed */}
        <FeedLayout />
        {/* widget */}
        <Widgets newsResults={newsResults} randomUsersData={randomUsersData.results}/>
        {/* modal */}

      </main>
    </div>

  );
}
// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json
