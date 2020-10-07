import React from "react";

import "./Sidebar.css";

import SidebarRow from "../SidebarRow";

import {
  ExpandMoreOutlined,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={Home} title="Início" />
      <SidebarRow Icon={Whatshot} title="Em alta" />
      <SidebarRow Icon={Subscriptions} title="Inscrições" />

      <hr />

      <SidebarRow Icon={VideoLibrary} title="Biblioteca" />
      <SidebarRow Icon={History} title="Histórico" />
      <SidebarRow Icon={OndemandVideo} title="Seus vídeos" />
      <SidebarRow Icon={WatchLater} title="Assistir mais tarde" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Vídeos marcados" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Mostrar mais" />

      <hr />
    </div>
  );
}

export default Sidebar;
