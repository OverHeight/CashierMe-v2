import axios from "axios";

const UseLoginHook = async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:5005/api/auth/login",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("response headers:", response.headers);

    const token = response.headers["authorization"];
    const userId = response.headers["x-user-id"];
    console.log("token: ", token)
    console.log("userId: ", userId)

    if (token) {
      localStorage.setItem("authorization", token);
      console.log("Login Successful. Token:", token);
    } else {
      console.log("No authorization header received");
    }
    if (userId) {
      localStorage.setItem("x-user-id", userId);
      console.log("Login Successful. User Id:", userId);
    } else {
      console.log("No x-user-id header received");
    }

    return response.status;
  } catch (error) {
    console.error("Error:", error);
    // Throw the error to propagate it to the calling code
    throw error;
  }
};


export default UseLoginHook;
