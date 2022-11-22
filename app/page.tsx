'use'

import SidebarLayout from "./sidebar/sidebarLayout";
import FeedLayout from "./feed/feedlayout";
import Widgets from "./widget/widgets";
import { ReactElement } from "react";

async function getData() {
  const res = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json");

  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


export default async function Page() {
   const newsResults = await getData();
  return (
    <div>
      <main className="flex min-h-screen mx-auto">
        {/* side bar */}
        <SidebarLayout />
        {/* feed */}
        <FeedLayout />
        {/* widget */}
        <Widgets newsResults={newsResults}/>
        {/* modal */}

      </main>
    </div>

  );
}
// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json
