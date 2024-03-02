import { useState } from "react";
import { UsePostDetailPenjualan } from "../../api/DetailPenjualanAPI";

const DetailPenjualanForm = () => {
  const [payload, setPayload] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    setPayload({
      ...payload,
      [input.id]: input.value,
    });
    console.log(payload);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call API function with payload
    const response = await UsePostDetailPenjualan(payload);
    console.log("Form submitted:", response);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Nama Pelanggan: </span>
          </div>
          <input
            type="text"
            id="namaPelanggan"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Jumlah Produk: </span>
          </div>
          <input
            type="number"
            id="jumlahProduk"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Subtotal: </span>
          </div>
          <input
            type="number"
            id="subTotal"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Penjualan ID: </span>
          </div>
          <input
            type="text"
            id="penjualanId"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Produk ID: </span>
          </div>
          <input
            type="text"
            id="produkId"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="container my-4">
        <button type="submit" className="btn text-white btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default DetailPenjualanForm;
