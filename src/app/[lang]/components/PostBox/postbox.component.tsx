import Image from "next/image";
import React, { Fragment } from "react";
import Author from "./Author";
import { MdPlaylistAdd } from "react-icons/md";
import { Tab } from "@headlessui/react";
import Comment from "./Comment";
import { IoSettingsOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { MdVolumeUp } from "react-icons/md";

function PostBox() {
  return (
    <div className="cursor-pointer rounded-[26px] bg-py-25-peach-fuzz lg:flex">
      <div className="relative aspect-[2.03865979] h-[17rem] rounded-[26px] saturate-150">
        <Image
          src="https://s3-alpha-sig.figma.com/img/25c9/5d34/18a8bf2213957374d48dd6856a4bfa5f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zm63~u81rOoANvAQ9p3q-7~H1QIWUfD9l8lrEh4W2OA0fEpoud~VtCYQPJ-7t8OCcizFFdxEmDKUEy-6KiubOFhZxHkCKywTw7FCGYNPVyIpzDGPQ37YMK7F5ONQSTuWEpFNW39WZzuaHNEXOMuJpqVYzyl2FQSdBI8LxIeS375SBiUl8VTAY1AnEJCmTUrkFcrOvsj8aYndpfoA4IaXtSjJ4ynUka7WhINDBdybgDM9pSDdqhBojpQkWNfGrhSoYEOJuubdCnW58mqJAGYyKxxs2VYzH~oXV1b0iDA4yIpDAMwuRxYJSfbrdWhp-Eb24vsNqrQChUS5ZNO~~FtSmw__"
          width={5000}
          height={5000}
          alt="Post Box Image 1"
          className="h-full w-full rounded-[26px] saturate-150"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-[26px] p-5 text-xs text-py-white backdrop-grayscale-[0.6]">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex justify-between">
              <p className="rounded-full bg-py-white/50 px-2 py-1">
                3092 views
              </p>
              <IoSettingsOutline
                size={23}
                className="h-6 w-6 rounded-full bg-py-white/50 p-1"
              />
            </div>
            <div className="flex w-full flex-col items-end gap-3">
              <MdVolumeUp
                size={23}
                className="h-6 w-6 rounded-full bg-py-white/50 p-1 text-right"
              />
              <div className="flex w-full justify-between rounded-full bg-py-white/50 px-2 py-1">
                <p className="">00:00:00</p>
                <div className="flex items-center justify-center gap-5">
                  <TbPlayerTrackPrev />
                  <CiPause1 />
                  <TbPlayerTrackNext />
                </div>
                <p className="">00:00:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full gap-3 p-3">
        <div className="flex justify-between">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-sm font-bold">The Weeknd’s list</h2>
            <Author />
          </div>
          <div className="flex flex-col items-end gap-2">
            <MdPlaylistAdd size={23} />
            <button className="rounded-md bg-py-peach-fuzz px-3 py-1 text-xs font-semibold text-py-white">
              Follow
            </button>
          </div>
        </div>
        <div className="mt-2 rounded-2xl bg-py-20-peach-fuzz">
          <Tab.Group>
            <Tab.List className="flex w-full px-2 text-sm text-py-orange">
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "w-full border-b-2 border-py-orange"
                        : "w-full border-b border-py-orange opacity-60"
                    }
                  >
                    Description
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "w-full border-b-2 border-py-orange pb-2"
                        : "w-full border-b border-py-orange pb-2 opacity-60"
                    }
                  >
                    Discuss
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="p-2 pb-0 text-left text-xs">
              <Tab.Panel className="h-24 overflow-scroll">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. 
              </Tab.Panel>
              <Tab.Panel className="flex flex-col gap-2">
                <div className="flex h-20 flex-col gap-2 overflow-scroll">
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                </div>
                <input
                  type="text"
                  className="mb-2 w-full rounded-full bg-py-peach-fuzz/40 p-2 text-py-white outline-none placeholder:text-py-white"
                  placeholder="Message"
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default PostBox;
