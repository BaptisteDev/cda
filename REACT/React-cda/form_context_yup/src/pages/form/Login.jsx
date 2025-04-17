import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
  const { login } = useContext(AuthContext);

  const schema = yup.object({
    username: yup.string().required("Le champ est obligatoire"),
    password: yup.string().required("Le champ est obligatoire"),
  });

  const defaultValues = {
    username: "",
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
    // reset(defaultValues);
  }

  return (
    <div className="w-full max-w-md p-6 bg-white shadow-xl rounded">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-4 mb-6 mx-auto max-w-[400px]"
      >
        <div className="flex flex-col mb-2">
          <label htmlFor="username" className="mb-2">
            Pseudo
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="border border-gray-300 rounded px-3 py-2 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="password" className="mb-2">
            Mot de passe
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="border border-gray-300 rounded px-3 py-2 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
          S'inscrire
        </button>
      </form>
    </div>
  );
}
