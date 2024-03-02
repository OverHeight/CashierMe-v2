import { Sidebar } from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[12%]">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">{children}</div>
    </div>
  );
}

export default AppLayout;
