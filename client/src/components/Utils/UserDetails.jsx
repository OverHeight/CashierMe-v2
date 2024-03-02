import { useEffect, useState } from "react";
import { Avatar } from "./Avatar";

export const UserDetails = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center items-center gap-3  w-max">
      <div className="container">
        <Avatar />
      </div>
      <div className="flex flex-col">
        <div className="container w-max">
          <p className="font-bold text-sm">John Camrey</p>
        </div>
        <div className="container">
          <p className="font-light text-xs">Cashier</p>
        </div>
      </div>
    </div>
  );
};
