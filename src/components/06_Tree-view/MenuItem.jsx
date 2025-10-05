import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  //   const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  //   function handleToggleChildren(getCurrentlabel) {
  //     console.log(getCurrentlabel);
  //     setDisplayCurrentChildren({
  //       ...displayCurrentChildren,
  //       [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
  //     });
  //   }
  //   console.log("displayCurrentChildren", displayCurrentChildren);

  //   return (
  //     <li>
  //       <div className="menu-item">
  //         <p>{item.label}</p>
  //         {item && item.children && item.children.length ? (
  //           <span onClick={() => handleToggleChildren(item.label)}>
  //             {displayCurrentChildren[item.label] ? (
  //               <FaMinus color="#fff" size={25} />
  //             ) : (
  //               <FaPlus color="#fff" size={25} />
  //             )}
  //           </span>
  //         ) : null}

  //         {item && item.children && item.children.length >0 && displayCurrentChildren[item.label] ? (
  //           <MenuList list={item.children} />
  //         ) : null}
  //       </div>
  //     </li>
  //   );

  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>

        {hasChildren && (
          <span onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaMinus color="#fff" size={20} />
            ) : (
              <FaPlus color="#fff" size={20} />
            )}
          </span>
        )}
      </div>

      {hasChildren && isOpen && <MenuList list={item.children} />}
    </li>
  );
};

export default MenuItem;
