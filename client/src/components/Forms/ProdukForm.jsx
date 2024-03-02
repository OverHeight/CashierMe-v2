import { useState } from "react";
import { UsePostProduct } from "../../api/ProductAPI";

const ProdukForm = () => {
  const [payload, setPayload] = useState({});
  const [image, setImage] = useState(null);

  const handleChange = ({ currentTarget: input }) => {
    if (input.type === "file") {
      setImage(input.files[0]);
    }
    setPayload({
      ...payload,
      [input.id]: input.value,
    });
    console.log(payload);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("namaProduk", payload.namaProduk);
    formData.append("harga", payload.harga);
    formData.append("stok", payload.stok);
    formData.append("image", image);

    // Call API function with FormData
    const response = await UsePostProduct(formData);
    console.log("Form submitted:", response);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Nama Produk: </span>
            </div>
            <input
              type="text"
              id="namaProduk"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Harga: </span>
            </div>
            <input
              type="number"
              id="harga"
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
              <span className="label-text">Stok: </span>
            </div>
            <input
              type="number"
              id="stok"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Foto: </span>
            </div>
            <input
              type="file"
              id="image"
              onChange={handleChange}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="container my-4">
          <button type="submit" className="btn text-white btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ProdukForm;
