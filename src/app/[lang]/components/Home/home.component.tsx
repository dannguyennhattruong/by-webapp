"use client";
import React from "react";
import PostBox from "../PostBox/postbox.component";
import Account from "./Account";
import StreamingUser from "./StreamingUser";
import TrendingSwiper from "../Swipers/TrendingSwiper";
import { sideBarItemList, sideBarMoreToolsList } from "./sidebarTabList";
import { Locale } from "../../../../../i18n.config";

interface Props {
  contentLocale: {
    title: string;
    description: string;
  };
  lang: Locale;
}

function HomePage({ contentLocale, lang }: Props) {
  const onRenderMainSideBar = () => {
    return sideBarItemList.map((item) => {
      return (
        <div
          key={item.id}
          className={`${item.isActive ? "text-by-orange" : ""} mx-auto flex cursor-pointer items-center gap-5 transition-colors duration-300 hover:text-by-orange lg:m-0`}
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
          className="mx-auto flex cursor-pointer items-center gap-5 transition-colors duration-300 hover:text-by-orange lg:m-0"
        >
          {item.icon}
          <p className="hidden lg:block">{item.content}</p>
        </div>
      );
    });
  };

  return (
    <div className="h-auto bg-by-white pt-[58px]">
      <div className="flex justify-between">
        <div className="flex h-auto max-w-[5rem] flex-col justify-between bg-by-20-peach-fuzz p-6 text-by-darken-blue lg:max-w-[14rem]">
          <div className="flex flex-col justify-between gap-5 pt-4">
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
        <div className="flex h-auto w-[25rem] flex-col gap-3 py-3 pr-5 text-by-darken-blue">
          <Account />
          <StreamingUser />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
