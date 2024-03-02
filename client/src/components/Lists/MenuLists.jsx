import { useEffect, useState } from "react";
import axios from "axios";

export const MenuLists = () => {
  const [products, setProducts] = useState([]);
  const baseUrl = "http://localhost:5005";

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/produk")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(products);

  return products.map((el) => (
    <div
      key={el.id}
      className="card flex card-compact border-2 w-64 bg-base-100 shadow-xl"
    >
      <div>
        <div className="w-32 h-32 flex justify-center items-center overflow-hidden">
          <div className="flex">
            <img
              src={baseUrl + el.url}
              alt={el.namaProduk}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="card-body">
          <h2 className="font-bold">{el.namaProduk}</h2>
          <p className="font-sans">Rp {el.harga}</p>
        </div>
      </div>
    </div>
  ));
};
