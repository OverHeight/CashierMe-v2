import AppLayout from "../../../components/Layout/AppLayout";
import ProdukForm from "../../../components/Forms/ProdukForm";

const AddItem = () => {
  return (
    <AppLayout>
      <div className="flex flex-grow justify-center items-center">
        <div className="flex w-1/3">
          <div className="container">
            <button className="btn w-full text-white btn-primary">
              Produk
            </button>
          </div>
        </div>
        <div className="flex w-2/3 justify-center">
          <div className="container w-max bg-base-200 border-2 rounded-xl">
            <ProdukForm />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AddItem;
