import { useState } from "react";
import { UsePostPenjualan } from "../../api/PenjualanAPI";

const PenjualanForm = () => {
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
    const response = await UsePostPenjualan(payload);
    console.log("Form submitted:", response);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Tanggal Penjualan: </span>
          </div>
          <input
            type="date"
            id="tanggalPenjualan"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Total Harga: </span>
          </div>
          <input
            type="number"
            id="totalHarga"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            step="0.01"
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pelanggan ID: </span>
          </div>
          <input
            type="text"
            id="pelangganId"
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

export default PenjualanForm;
