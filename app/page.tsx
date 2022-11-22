"use client";
import { Button, Grid, Stack } from "@mui/material";
import SidebarLayout from "./sidebar/sidebarLayout";
import FeedLayout from "./feed/feedlayout";
import Widgets from "./widget/widgets";
export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* side bar */}
        <SidebarLayout />
        {/* feed */}
        <FeedLayout />
        {/* widget */}
        <Widgets />
        {/* modal */}
      </main>
    </div>

  );
}