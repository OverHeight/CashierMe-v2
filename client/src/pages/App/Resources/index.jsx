import { useState } from "react";
import AppLayout from "../../../components/Layout/AppLayout";
import { ResourceTable } from "../../../components/Tables/ResourceTable";

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState("");
  const [activeTab, setActiveTab] = useState("produk");
  const list = [
    {
      name: "Produk",
      resource: "produk",
    },
    {
      name: "Pelanggan",
      resource: "pelanggan",
    },
    {
      name: "Penjualan",
      resource: "penjualan",
    },
    {
      name: "Detail Penjualan",
      resource: "detailpenjualan",
    },
    {
      name: "User",
      resource: "user",
    },
  ];
  return (
    <AppLayout>
      <div className="flex flex-col flex-grow">
        <div className="container p-4">
          <span className="text-2xl font-inter font-semibold">
            Resource Management
          </span>
        </div>
        <div className="flex flex-grow">
          <div className="container  w-1/6">
            <div className="p-2">
              <ul className="menu gap-2 w-full bg-neutral-700 text-white rounded-md">
                <li className="menu-title text-white text-center text-lg font-semibold">
                  Option
                </li>
                {list.map((el, index) => (
                  <li
                    key={index}
                    className={`rounded-lg ${
                      activeTab === selectedResource ? "bg-gray-500" : ""
                    }`}
                  >
                    <a
                      onClick={() => {
                        setActiveTab(el.name), setSelectedResource(el.resource);
                      }}
                      contextMenu={() => {}}
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center w-5/6">
            <div className="container w-full p-4">
              <ResourceTable resource={selectedResource} />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Resources;
