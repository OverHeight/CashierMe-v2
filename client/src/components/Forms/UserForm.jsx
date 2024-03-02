import { useState } from "react";
import { UsePostUser } from "../../api/UserAPI";

const UserForm = () => {
  const [payload, setPayload] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    setPayload({
      ...payload,
      [input.id]: input.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call API function with payload
    const response = await UsePostUser(payload);
    console.log("Form submitted:", response);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Username: </span>
          </div>
          <input
            type="text"
            id="username"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email: </span>
          </div>
          <input
            type="email"
            id="email"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password: </span>
          </div>
          <input
            type="password"
            id="password"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Is Admin: </span>
          </div>
          <select
            id="isAdmin"
            className="select select-bordered w-full max-w-xs"
            onChange={handleChange}
            required
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
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

export default UserForm;
