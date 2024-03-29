import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
export default function useSignup (url) {
    const [error, setError] = useReducer(null);
    const [isLoading, setIsLoading] = useReducer(null);
    const signup = async (object) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(object),
        });
        const user = await response.json();
    
        if (!response.ok) {
            console.log(user.error);
          setError(user.error);
          setIsLoading(false);
          return error;
        }
    
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoading(false);
      };

      return { signup, isLoading, error };
}