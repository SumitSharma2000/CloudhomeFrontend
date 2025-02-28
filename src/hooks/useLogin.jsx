import { useDispatch } from "react-redux";
import { slicelogin } from "../store/slice/authSlice";
const useLogin = () => {
  const dispatch =  useDispatch();

  const login = async ({ email, password }) => {
    try {
      const response = await fetch(
        `https://cloudhome-dbq6.onrender.com/api/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        dispatch(slicelogin(data));
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("error------>" , error)
      alert("login error");
    }
  };
  return { login };
};
export default useLogin;
