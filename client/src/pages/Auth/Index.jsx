import financeImg from "../../assets/financial.jpeg";
import { LoginForm } from "../../components/Auth/LoginForm";
const Auth = () => {
  return (
    <div>
      <div className="flex w-full h-screen">
        <div className="flex w-2/6 bg-primary justify-center items-center text-white">
          <div className="flex-row w-full text-center">
            <div className="py-2">
              <h1 className="text-3xl">CashierMe</h1>
            </div>
            <div className="py-4">
              <p>Please Enter Your Account Details</p>
            </div>
            <div className="py-6 ">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="flex w-4/6 justify-center items-center">
          <img src={financeImg} className="max-w-xl" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
