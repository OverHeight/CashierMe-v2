import { useState } from "react";
import { UsePostPelanggan } from "../../api/PelangganAPI";

const PelangganForm = () => {
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
    const response = await UsePostPelanggan(payload);
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
            <span className="label-text">Alamat: </span>
          </div>
          <input
            type="text"
            id="alamat"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Nomor Telepon: </span>
          </div>
          <input
            type="tel"
            id="nomorTelepon"
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

export default PelangganForm;
