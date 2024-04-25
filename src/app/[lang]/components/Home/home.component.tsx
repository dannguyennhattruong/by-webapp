"use client";
import React from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { MdSpatialAudioOff } from "react-icons/md";
import { RiCompass3Line, RiPlayListFill } from "react-icons/ri";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { GrGroup, GrChapterAdd } from "react-icons/gr";
import { LuMoon } from "react-icons/lu";
import { BsList } from "react-icons/bs";
import PostBox from "../PostBox/postbox.component";
import Account from "./Account";
import StreamingUser from "./StreamingUser";
import TrendingSwiper from "../Swipers/TrendingSwiper";

interface Props {
  contentLocale: {
    title: string;
    description: string;
  };
}

function HomePage({ contentLocale }: Props) {
  console.log("contentLocale: ", contentLocale);
  const sideBarItemList = [
    { id: 2, icon: <MdSpatialAudioOff size={22} />, content: "Streaming room" },
    { id: 3, icon: <RiCompass3Line size={22} />, content: "Explore" },
    { id: 4, icon: <LiaUserFriendsSolid size={22} />, content: "Friends" },
    { id: 5, icon: <GrGroup size={22} />, content: "Groups" },
    { id: 6, icon: <RiPlayListFill size={22} />, content: "Playlist" },
    { id: 7, icon: <GrChapterAdd size={22} />, content: "Create" },
  ];
  const sideBarMoreToolsList = [
    { id: 8, icon: <LuMoon size={22} />, content: "Switch Mode" },
    { id: 9, icon: <BsList size={22} />, content: "More" },
  ];

  const onRenderMainSideBar = () => {
    return sideBarItemList.map((item) => {
      return (
        <div
          key={item.id}
          className="mx-auto flex cursor-pointer items-center gap-5 transition-colors duration-300 hover:text-py-orange lg:m-0"
        >
          {item.icon}
          <p className="hidden lg:block">{item.content}</p>
        </div>
      );
    });
  };

  const onRenderMoreToolsSideBar = () => {
    return sideBarMoreToolsList.map((item) => {
      return (
        <div
          key={item.id}
          className="mx-auto flex cursor-pointer items-center gap-5 transition-colors duration-300 hover:text-py-orange lg:m-0"
        >
          {item.icon}
          <p className="hidden lg:block">{item.content}</p>
        </div>
      );
    });
  };

  return (
    <div className="h-[calc(100vh-58px)] bg-py-white">
      <div className="flex justify-between">
        <div className="flex h-[calc(100vh-58px)] max-w-[5rem] flex-col justify-between bg-py-20-peach-fuzz p-6 text-py-darken-blue lg:max-w-[14rem]">
          <div className="flex flex-col justify-between gap-5 pt-4">
            <div className="mx-auto flex cursor-pointer items-center gap-5 font-medium text-py-orange lg:m-0">
              <GiMusicalNotes size={22} />
              <p className="hidden lg:block">Feeds</p>
            </div>
            {onRenderMainSideBar()}
          </div>
          <div className="flex flex-col justify-between gap-5">
            {onRenderMoreToolsSideBar()}
            <hr className="mx-auto my-4 h-[2px] w-full rounded border-0 bg-[#D9D9D9]" />
            <p className="text-xs">
              About . Help . Terms . Privacy . © 2024 Be yourself
            </p>
          </div>
        </div>
        <div className="flex h-[calc(100vh-58px)] w-full flex-col gap-5 overflow-scroll px-8 py-5">
          <PostBox />
          <TrendingSwiper />
          <PostBox />
        </div>
        <div className="flex h-[calc(100vh-58px)] w-[25rem] flex-col gap-3 py-3 pr-5 text-py-darken-blue">
          <Account />
          <StreamingUser />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
