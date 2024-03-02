import AppLayout from "../../../components/Layout/AppLayout";
import ProdukForm from "../../../components/Forms/ProdukForm";
import PenjualanForm from "../../../components/Forms/PenjualanForm";
import PelangganForm from "../../../components/Forms/PelangganForm";
import DetailPenjualanForm from "../../../components/Forms/DetailPenjualanForm";
import UserForm from "../../../components/Forms/UserForm";
import { useState } from "react";

const AddItem = () => {
  const [title, setTitle] = useState("Produk");
  const [form, setForm] = useState("ProdukForm");

  const handleFormChange = (formType) => {
    setForm(formType);
    setTitle(
      formType === "ProdukForm"
        ? "Produk"
        : formType === "PenjualanForm"
        ? "Penjualan"
        : formType === "PelangganForm"
        ? "Pelanggan"
        : formType === "DetailPenjualanForm"
        ? "Detail Penjualan"
        : "User"
    );
  };

  const data = [
    {
      title: "Produk",
      form: "ProdukForm",
    },
    {
      title: "Penjualan",
      form: "PenjualanForm",
    },
    {
      title: "Pelanggan",
      form: "PelangganForm",
    },
    {
      title: "Detail Penjualan",
      form: "DetailPenjualanForm",
    },
    {
      title: "User",
      form: "UserForm",
    },
  ];

  const renderForm = () => {
    switch (form) {
      case "PenjualanForm":
        return <PenjualanForm />;
      case "PelangganForm":
        return <PelangganForm />;
      case "DetailPenjualanForm":
        return <DetailPenjualanForm />;
      case "UserForm":
        return <UserForm />;
      default:
        return <ProdukForm />;
    }
  };

  return (
    <AppLayout>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex w-full h-14 bg-primary">
          {data.map((el, index) => (
            <div
              key={index}
              className="flex flex-grow justify-center items-center bg-primary p-2"
            >
              <div
                onClick={() => handleFormChange(el.form)}
                className={`w-full h-full flex justify-center items-center cursor-pointer border-x-2 ${
                  form === el.form ? "bg-secondary" : ""
                } transition-colors duration-300`}
              >
                <span className="text-white text-lg font-bold">{el.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col w-max bg-base-200 border-2 rounded-xl text-center transition-opacity duration-300">
            <span className="my-4 font-bold text-xl">Create {title}</span>
            {renderForm()}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AddItem;
