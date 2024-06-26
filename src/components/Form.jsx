import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { DottedButton } from "./Button";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ route, method }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const fetchUserProfile = async () => {
    try {
      const res = await api.get("/api/userprofile/");
      console.log(res.data);

      if (res.data && Array.isArray(res.data)) {
        if (res.data[0]?.preferences_set) {
          toast.success("Here we go!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          setTimeout(() => {
            navigate("/homepage");
          }, 3000);
        } else {
          toast.success("Here we go!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          setTimeout(() => {
            navigate("/preferences");
          }, 3000);
        }
      } else {
        toast.success("Here we go!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        setTimeout(() => {
          navigate("/preferences");
        }, 3000);
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  const name = method === "login" ? "Login" : "Register";
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const res = await api.post(route, data);
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        await fetchUserProfile();
      } else {
        toast.success("Registration successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <ToastContainer />
      <h2 className="text-3xl text-white font-bold">{name}</h2>
      <label className="text-gray-700 text-sm font-bold">
        Username
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="text"
          {...register("username", { required: "This field is required" })}
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold">
        Password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <span className="flex justify-center items-center">
        <DottedButton name={name} isLoading={isLoading} type="submit" />
      </span>
    </form>
  );
};

export default Form;
