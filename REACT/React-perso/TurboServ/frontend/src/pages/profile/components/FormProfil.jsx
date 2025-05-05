import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../../context/AuthContext";
import toast from "react-hot-toast";
export default function FormProfil() {
  const { user, login } = useContext(AuthContext);

  const schema = yup.object({
    firstname: yup
      .string()
      .required("Le prénom est obligatoire")
      .min(2, "Minimum 2 caractères")
      .max(50, "Maximum 50 caractères")
      .matches(
        /^[a-zA-ZÀ-ÿ\s'-]+$/,
        "Le prénom ne peut contenir que des lettres"
      ),
    lastname: yup
      .string()
      .required("Le nom est obligatoire")
      .min(2, "Minimum 2 caractères")
      .max(50, "Maximum 50 caractères")
      .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom ne peut contenir que des lettres"),
    pseudo: yup
      .string()
      .required("Le pseudo est obligatoire")
      .min(2, "Minimum 2 caractères")
      .max(50, "Maximum 50 caractères")
      .matches(
        /^[a-zA-ZÀ-ÿ\s'-]+$/,
        "Le pseudo ne peut contenir que des lettres"
      ),
    email: yup
      .string()
      .email()
      .required("L'email est obligatoire")
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "Format de votre email non valide"
      ),
  });

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: errorsProfile },
    reset: resetProfile,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  async function submit(values) {
    try {
      const userId = user._id;
      const response = await fetch("http://localhost:3000/user/profil/update", {
        method: "POST",
        body: JSON.stringify({ ...values, userId }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const feedback = await response.json();
      if (response.status === 200) {
        login(feedback);
        toast.success("Mise à jour du profil");
      } else {
        toast.error(feedback.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmitProfile(submit)}
        className="mt-8 w-full lg:px-10"
      >
        <div className="md:flex md:justify-center gap-4 mb-6 w-full">
          <div className="flex flex-col md:w-2/4">
            <label htmlFor="firstname">Prénom</label>
            <input
              {...registerProfile("firstname")}
              type="text"
              id="firstname"
              className="border rounded h-[45px] p-2 border-gray-400 my-2 w-full"
              defaultValue={user?.firstname}
            />
            {errorsProfile.firstname && (
              <p className="text-red-500">{errorsProfile.firstname.message}</p>
            )}
          </div>{" "}
          <div className="flex flex-col md:w-2/4">
            <label htmlFor="lastname">Nom</label>
            <input
              {...registerProfile("lastname")}
              type="text"
              id="lastname"
              className="border rounded h-[45px] p-2 border-gray-400 my-2 w-full"
              defaultValue={user?.lastname}
            />
            {errorsProfile.lastname && (
              <p className="text-red-500">{errorsProfile.lastname.message}</p>
            )}
          </div>
        </div>
        <div className="md:flex md:justify-center gap-4 w-full">
          <div className="flex flex-col md:w-2/4">
            <label htmlFor="pseudo">Pseudo</label>
            <input
              {...registerProfile("pseudo")}
              type="text"
              id="pseudo"
              className="border rounded h-[45px] p-2 border-gray-400 my-2 w-full"
              defaultValue={user?.pseudo}
            />
            {errorsProfile.pseudo && (
              <p className="text-red-500">{errorsProfile.pseudo.message}</p>
            )}
          </div>
          <div className="flex flex-col md:w-2/4 ">
            <label htmlFor="email">Email</label>
            <input
              {...registerProfile("email")}
              type="email"
              id="email"
              className="border rounded h-[45px] p-2 border-gray-400 my-2 w-full"
              defaultValue={user?.email}
            />
            {errorsProfile.email && (
              <p className="text-red-500">{errorsProfile.email.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-2">
          <button className="cursor-pointer bg-primary hover:bg-hover h-[40px] w-[190px] text-white transition">
            Mettre à jour
          </button>
        </div>
      </form>
    </div>
  );
}
