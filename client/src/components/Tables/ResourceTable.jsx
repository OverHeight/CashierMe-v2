import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseDeleteProduct } from "../../api/ProductAPI";
import { UseDeletePelanggan } from "../../api/PelangganAPI";
import { UseDeleteDetailPenjualan } from "../../api/DetailPenjualanAPI";

export const ResourceTable = ({ resource }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [baseUrl, setBaseUrl] = useState("");
  const data = [
    {
      name: "produk",
      url: "http://localhost:5005/api/produk",
      clientUrl: "add/produk",
      headers: ["ID", "Image", "Nama Produk", "Harga", "Stok"],
      table: ["id", "", "namaProduk", "harga", "stok"],
      click: () => UseDeleteProduct(row.id),
    },
    {
      name: "pelanggan",
      url: "http://localhost:5005/api/pelanggan",
      clientUrl: "add/pelanggan",
      headers: ["ID", "Nama Pelanggan", "Alamat", "Nomor Telepon"],
      table: ["Id", "namaPelanggan", "alamat", "nomorTelepon"],
      deleteAPI: UseDeletePelanggan,
    },
    {
      name: "penjualan",
      url: "http://localhost:5005/api/penjualan",
      clientUrl: "add/penjualan",
      headers: [
        "ID",
        "Tanggal Penjualan",
        "Total",
        "Id Pelanggan",
        "Created At",
      ],
      table: [
        "id",
        "tanggalPenjualan",
        "totalHarga",
        "pelangganId",
        "CreatedAt",
      ],
      deleteAPI: UseDeleteDetailPenjualan,
    },
    {
      name: "detailpenjualan",
      url: "http://localhost:5005/api/detail-penjualan",
      clientUrl: "add/detailpenjualan",
      headers: [
        "ID",
        "Nama Pelanggan",
        "Jumlah Produk",
        "Sub Total",
        "Penjualan Id",
        "Id Produk",
        "Created At",
      ],
      table: [
        "id",
        "namaPelanggan",
        "jumlahProduk",
        "subTotal",
        "penjualanId",
        "produkId",
        "createdAt",
      ],
    },
    {
      name: "user",
      url: "http://localhost:5005/api/user",
      clientUrl: "add/user",
      headers: [
        "ID",
        "Username",
        "Email",
        "Password",
        "Is Admin",
        "Token",
        "Created At",
      ],
      table: [
        "id",
        "username",
        "email",
        "password",
        "isAdmin",
        "token",
        "createdAt",
      ],
    },
  ];

  useEffect(() => {
    const selectedObject = data.find((el) => el.name === resource);
    if (selectedObject) {
      setBaseUrl(selectedObject.url);
    }
    setTimeout(10000);
    setIsLoading(false);
  }, [resource]);

  useEffect(() => {
    if (baseUrl) {
      axios
        .get(baseUrl)
        .then((response) => setValue(response.data))
        .catch((err) => console.error(err));
    }
  }, [baseUrl]);

  useEffect(() => {
    if (value.length > 0) {
      // Do something here to handle data refreshing after deletion
      console.log("Data refreshed after deletion:", value);
    }
  }, [value]);

  console.log(value);

  if (!resource || isLoading)
    return (
      <div className="flex p-10 w-full h-52 justify-center items-center skeleton"></div>
    );

  return (
    <>
      <div className="overflow-x-auto max-w-6xl bg-neutral-200 rounded-lg">
        <table className="table">
          <thead className="bg-primary text-white">
            <tr>
              {data
                .find((el) => el.name === resource)
                ?.headers.map((header, index) => (
                  <>
                    <th key={index}>{header}</th>
                  </>
                ))}
              <th className="w-24 items-end">
                <button
                  onClick={() => navigate("/app/resources/add")}
                  className="btn btn-ghost w-full"
                >
                  <FaPlusCircle size={30} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {value.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {data
                  .find((el) => el.name === resource)
                  ?.table.map((data, index) => (
                    <td key={index}>{row[data]}</td>
                  ))}
                <td className="flex gap-2">
                  <button className="btn bg-base-content btn-sm text-white">
                    Edit
                  </button>
                  <button
                    onClick={() => row.id}
                    className="btn bg-stone-500 btn-sm text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
