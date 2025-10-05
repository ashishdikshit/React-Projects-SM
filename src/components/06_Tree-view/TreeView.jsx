import React from "react";
import "./styles.css";
import MenuList from "./MenuList";

const TreeView = ({ menus }) => {

  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
