import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

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

  function submit(values) {
    login(values);
    toast.success("Connexion réussie");
    navigate("/");
  }
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full border-1 max-w-md p-6 bg-white shadow-xl rounded">
        <div className="flex justify-center mb-4">
          <h2>Connexion</h2>
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

          <div className="flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
