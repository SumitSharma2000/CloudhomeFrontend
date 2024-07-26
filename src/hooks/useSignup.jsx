import { useNavigate } from "react-router-dom";

const useSignup = () => {

  const navigate = useNavigate();

  const signup = async ({ firstName ,email, password }) => {
    try {
      const response = await fetch(
        `https://cloudhome-dbq6.onrender.com/api/v1/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, email, password }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        navigate(`/login?email=${email}`);
      }else {
        alert(data.message);
      }
    } catch (error) {
      alert("SignUp error");
    }
  };
  return { signup };
};
export default useSignup;
