import { GiMusicalNotes } from "react-icons/gi";
import { MdSpatialAudioOff } from "react-icons/md";
import { RiCompass3Line, RiPlayListFill } from "react-icons/ri";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { GrGroup, GrChapterAdd } from "react-icons/gr";
import { LuMoon } from "react-icons/lu";
import { BsList } from "react-icons/bs";

export const sideBarItemList = [
  {
    id: 1,
    icon: <GiMusicalNotes size={22} />,
    content: "Feeds",
    isActive: true,
  },
  {
    id: 2,
    icon: <MdSpatialAudioOff size={22} />,
    content: "Streaming room",
    isActive: false,
  },
  {
    id: 3,
    icon: <RiCompass3Line size={22} />,
    content: "Explore",
    isActive: false,
  },
  {
    id: 4,
    icon: <LiaUserFriendsSolid size={22} />,
    content: "Friends",
    isActive: false,
  },
  { id: 5, icon: <GrGroup size={22} />, content: "Groups", isActive: false },
  {
    id: 6,
    icon: <RiPlayListFill size={22} />,
    content: "Playlist",
    isActive: false,
  },
  {
    id: 7,
    icon: <GrChapterAdd size={22} />,
    content: "Create",
    isActive: false,
  },
];

export const sideBarMoreToolsList = [
  { id: 8, icon: <LuMoon size={22} />, content: "Switch Mode" },
  { id: 9, icon: <BsList size={22} />, content: "More" },
];
