import { useEffect, useState } from "react";
import { UseGetPelanggan } from "../../api/PelangganAPI";
import { CartList } from "../Lists/CartList";
import axios from "axios";

export const Cart = () => {
  const [selectedPelanggan, setSelectedPelanggan] = useState("");
  const [pelanggan, setPelanggan] = useState([]);
  console.log(pelanggan);

  const handleSelect = (e) => {
    setSelectedPelanggan(e.target.value);
    console.log(e);
  };
  console.log(selectedPelanggan);

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/pelanggan")
      .then((response) => setPelanggan(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex-col w-full h-full border-l-2">
      <div className="container bg-primary p-4">
        <span className="text-2xl font-semibold text-white">Order Details</span>
      </div>
      <div className="flex items-center text-sm border-b-2 justify-between p-2">
        <select className="select select-xs select-ghost w-max max-w-xs">
          <option disabled selected>
            select Pelanggan
          </option>
          {pelanggan.map((el, index) => (
            <option onClick={handleSelect} value={el.id} key={index}>
              {index + 1} {el.namaPelanggan}
            </option>
          ))}
        </select>
        <p>Order Number</p>
      </div>
      <div className="flex flex-col p-2">
        <div className="container">
          <span className="font-semibold">Current Order</span>
        </div>
        <div className="flex flex-grow overflow-auto h-96">
          <CartList />
          {/* Order Detail to be included */}
        </div>
      </div>

      <div className="flex flex-col p-2 justify-center border-t">
        <div className="flex justify-between mx-1">
          <button className="btn btn-xs btn-secondary px-4">Notes</button>
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="toggle toggle-xs" />
            <span className="text-sm">Takeaway</span>
          </div>
        </div>
        <div className="flex justify-between  p-2 font-bold">
          <span>Subtotal</span>
          <span>Rp 40,000,00</span>
        </div>
        <div className="flex justify-between  p-2 font-bold">
          <span>Tax</span>
          <span>Rp 400,00</span>
        </div>
        <div className="container w-full h-0.5 bg-neutral-300 rounded-full"></div>
        <div className="flex justify-between  p-2 font-bold">
          <span>Total</span>
          <span>Rp 40,400,00</span>
        </div>
        <div className="flex">
          <button className="btn btn-primary w-full rounded-xl text-white">
            Continue to pay
          </button>
        </div>
      </div>
    </div>
  );
};
