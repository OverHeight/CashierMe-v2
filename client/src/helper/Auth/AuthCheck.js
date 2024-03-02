const AuthCheck = () => {
  const token = localStorage.getItem("authorization");
  console.log(token);
};

export default AuthCheck;
