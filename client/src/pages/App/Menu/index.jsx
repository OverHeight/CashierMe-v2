import AppLayout from "../../../components/Layout/AppLayout";
import { Cart } from "../../../components/Layout/Cart";
import { MenuLists } from "../../../components/Lists/MenuLists";
import { SearchBar } from "../../../components/Queries/SearchBar";
import { CategoryList } from "../../../components/Utils/CategoryList";
import { UserDetails } from "../../../components/Utils/UserDetails";

const Menu = () => {
  return (
    <AppLayout>
      <div className="flex w-full h-screen">
        <div className="flex flex-col w-4/6">
          <div className="flex w-full gap-x-5 items-center justify-center p-4">
            <div className="container w-10/12">
              <SearchBar />
            </div>
            <div className="container w-2/12">
              <UserDetails />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 p-4">
            <div className="container">
              <span className="text-xl font-bold">Category</span>
            </div>
            <div className="container">
              <CategoryList />
            </div>
          </div>
          <div className="flex flex-col flex-grow p-4 pb-0">
            <div className="container">
              <span className="text-xl font-bold">Menu</span>
            </div>
            <div className="flex flex-wrap gap-4 p-2">
              <MenuLists />
            </div>
          </div>
        </div>
        <div className="flex w-2/6">
          <Cart />
        </div>
      </div>
    </AppLayout>
  );
};

export default Menu;
