import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
export default function Register() {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup
      .string()
      .email()
      .required("Le champ est obligatoire")
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "Format de votre email non valide"
      ),
    password: yup
      .string()
      .required("Le champ est obligatoire")
      .min(5, "trop court")
      .max(10, "trop long"),
    confirmPassword: yup
      .string()
      .required("Le champ est obligatoire")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passes ne correspondent pas"
      ),
    rgpd: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les termes et conditions"),
  });

  const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
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
    console.log(values);
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      });
      const newUser = await response.json();
      console.log(newUser);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Inscription réussie");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex-1 flex items-center justify-center mt-20">
      <div className="w-full max-w-md p-6 bg-white  rounded">
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl">Inscription</h2>
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
          <div className="flex flex-col mb-3">
            <label htmlFor="confirmPassword" className="mb-2">
              Confirmation du mot de passe :
            </label>
            <input
              {...register("confirmPassword")}
              className="border border-gray-300 rounded px-3 py-2 focus: outline-none focus:ring-2 focus:ring-blue-500"
              id="confirmPassword"
              type="password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="flex flex-col items-center mb-3 ">
            <label htmlFor="rgpd" className="mb-2 cursor-pointer">
              <input
                {...register("rgpd")}
                type="checkbox"
                className="mr-4 cursor-pointer"
                id="rgpd"
              />
              J'accepte les conditions d'utilisation
            </label>
            {errors.rgpd && (
              <p className="text-red-500">{errors.rgpd.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button className="bg-primary text-white w-[250px] h-[50px] px-4 py-2 rounded hover:bg-hover transition-all cursor-pointer">
              S'inscrire
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-5">
          <NavLink to="/login" className="underline">
            Déjà un compte ?
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
