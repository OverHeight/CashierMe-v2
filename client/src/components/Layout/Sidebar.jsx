import { IoMdHome } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const pageList = [
    {
      name: "Home",
      path: "/app",
      icon: <IoMdHome size={30} />,
    },
    {
      name: "Menu",
      path: "/app/menu",
      icon: <MdOutlineHistoryEdu size={30} />,
    },
    {
      name: "Transaction History",
      path: "/app/history",
      icon: <MdRestaurantMenu size={30} />,
    },
    {
      name: "Resource Management",
      path: "/app/resources",
      icon: <GrResources size={30} />,
      dropdown: true,
    },
  ];

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  return (
    <div className="flex flex-col h-full bg-primary">
      <div className="p-4 text-center">
        <span className="text-4xl font-bold font-plex text-white">
          CashierMe
        </span>
      </div>
      <ul className="menu menu-md text-white font-bold text-md flex-grow">
        {pageList.map((el, index) => (
          <li key={index} className="my-1">
            <a
              onClick={() => navigate(`${el.path}`)}
              className={`flex items-center ${
                el.path === active ? "bg-secondary" : ""
              }`}
            >
              <span>{el.icon}</span>
              <span className="ml-2">{el.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="menu flex-shrink text-white">
        <li>
          <a className="flex items-center">
            <span>
              <IoSettingsOutline size={30} />
            </span>
            <span className="ml-2">Options</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
