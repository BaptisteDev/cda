import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { signin } from "../../apis/auth.api";

export default function Login() {
  const navigate = useNavigate();
  const { login, spinner, setSpinner } = useContext(AuthContext);

  const schema = yup.object({
    email: yup
      .string()
      .email()
      .required("Le champ est obligatoire")
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "Format de votre email non valide"
      ),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  async function submit(values) {
    try {
      const response = await signin(values);
      if (!response.message) {
        setSpinner(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Connexion réussie");
        login(response);
        navigate("/");
        setSpinner(false);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center mt-20">
      <div className="w-full  max-w-md p-6 bg-white  rounded">
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl">Connexion</h2>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="mb-2">
              Email :
            </label>
            <input
              {...register("email")}
              className="border border-gray-300 rounded px-3 py-2 focus: outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="mb-2">
              Mot de passe :
            </label>
            <input
              {...register("password")}
              className="border border-gray-300 rounded px-3 py-2 focus: outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className=" flex justify-center">
            {spinner == true ? (
              <button
                className="bg-gray-600 text-white w-[250px] h-[50px] px-4 py-2 rounded transition-all flex justify-center items-center "
                disabled
              >
                <span className="spinner"></span>
              </button>
            ) : (
              <button className="bg-primary text-white w-[250px] h-[50px] px-4 py-2 rounded hover:bg-hover transition-all flex justify-center items-center cursor-pointer">
                <span>Se connecter</span>
              </button>
            )}
          </div>
        </form>
        <div className="flex justify-center mt-5">
          <NavLink to="/register" className="underline">
            Pas encore de compte ?
          </NavLink>
        </div>
        <div className="flex items-center mt-10">
          <hr className="w-full mr-6" />
          Ou
          <hr className="w-full ml-6" />
        </div>
        <div className="flex flex-col mt-10">
          <button className="flex items-center mb-3 text-left pl-4 border h-[50px] rounded-xl cursor-pointer hover:bg-black hover:text-white transition">
            <FaGoogle className="mr-4 text-2xl" />
            Continuer avec Google
          </button>
          <button className="flex items-center mb-3 text-left pl-4 border h-[50px] rounded-xl cursor-pointer hover:bg-black hover:text-white transition">
            <FaDiscord className="mr-4 text-2xl" />
            Continuer avec Discord
          </button>
        </div>
      </div>
    </div>
  );
}
