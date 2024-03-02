import axios from "axios";

const UseLoginHook = async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:5005/auth/login",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response : ", response.data);

    const token = response.data["authorization"];

    if (token) {
      localStorage.setItem("authorization", token);
      console.log("Login Successful ", token);
    } else {
      console.log("No authorization header received");
    }
  } catch (error) {
    console.error("Error: " + error);
  }
};

export default UseLoginHook;
