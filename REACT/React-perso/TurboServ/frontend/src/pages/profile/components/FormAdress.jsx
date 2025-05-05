import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../../context/AuthContext";
import toast from "react-hot-toast";

export default function FormAdress() {
  const { user } = useContext(AuthContext);
  const schemaAdress = yup.object({
    adress: yup
      .string()
      .required("L'adresse est obligatoire")
      .min(2, "Minimum 2 caractères")
      .max(50, "Maximum 50 caractères"),
    complement: yup.string(),
    city: yup
      .string()
      .required("La ville est obligatoire")
      .min(2, "Minimum 2 caractères")
      .max(50, "Maximum 50 caractères")
      .matches(
        /^[a-zA-ZÀ-ÿ\s'-]+$/,
        "Le ville ne peut contenir que des lettres"
      ),
    postalCode: yup
      .string()
      .required("Le code postal est obligatoire")
      .matches(/^\d{5}$/, "Le code postal doit comporter 5 chiffres"),
  });

  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    formState: { errors: errorsAddress },
    reset: resetAddress,
  } = useForm({
    resolver: yupResolver(schemaAdress),
    mode: "onChange",
  });

  async function submitAdress(values) {
    try {
      const userId = user._id;
      const response = await fetch("http://localhost:3000/adress/add", {
        method: "POST",
        body: JSON.stringify({ ...values, userId }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Ajout de l'adresse");
      } else {
        const response = await fetch("http://localhost:3000/adress/update", {
          method: "POST",
          body: JSON.stringify({ ...values, userId }),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (response.status === 200) {
          toast.success("Mise à jour de l'adresse");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteAdresse() {
    try {
      const userId = user._id; // Récupérer l'ID de l'utilisateur connecté
      const response = await fetch(
        `http://localhost:3000/adress/delete/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Votre adresse a été supprimée avec succès.");
        resetAddress({
          adress: "",
          complement: "",
          city: "",
          postalCode: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchAddress() {
      try {
        const userId = user._id; // Récupérer l'ID de l'utilisateur connecté
        const response = await fetch(`http://localhost:3000/adress/${userId}`);
        if (response.status === 200) {
          const data = await response.json();
          resetAddress(data); // Définir les valeurs par défaut dans le formulaire
        }
      } catch (error) {
        console.log(error);
        toast.error("Erreur lors de la récupération de l'adresse");
      }
    }

    // si le user existe on fetch
    if (user) {
      fetchAddress();
    }
  }, [user, resetAddress]);

  return (
    <div className="w-full">
      <div className="flex justify-center lg:justify-start">
        <a onClick={deleteAdresse} className="ml-4  underline cursor-pointer">
          Supprimer l'adresse ?
        </a>
      </div>
      <form
        onSubmit={handleSubmitAddress(submitAdress)}
        className="mt-8 w-full lg:px-10"
      >
        <div className="md:flex md:justify-center gap-4 mb-6 w-full">
          <div className="flex flex-col md:w-2/4">
            <label htmlFor="adress">Adresse</label>
            <input
              {...registerAddress("adress")}
              type="text"
              id="adress"
              className="border rounded h-[45px] p-2 border-gray-400 my-2 w-full"
            />
            {errorsAddress.adress && (
              <p className="text-red-500">{errorsAddress.adress.message}</p>
            )}
          </div>
          <div className="flex flex-col md:w-2/4">
            <label htmlFor="complement">Complement d'adresse</label>
            <input
              {...registerAddress("complement")}
              type="text"
              id="complement"
              className="border rounded h-[45px] p-2 border-gray-400 my-2 w-full"
            />
            {errorsAddress.complement && (
              <p className="text-red-500">{errorsAddress.complement.message}</p>
            )}
          </div>
        </div>
        <div className="md:flex md:justify-center gap-4 w-full">
          <div className="flex flex-col md:w-2/4">
            <label htmlFor="city">Ville</label>
            <input
              {...registerAddress("city")}
              type="text"
              id="city"
              className="border rounded h-[45px] p-2 border-gray-400 my-2 w-full"
            />
            {errorsAddress.city && (
              <p className="text-red-500">{errorsAddress.city.message}</p>
            )}
          </div>
          <div className="flex flex-col md:w-2/4 ">
            <label htmlFor="postalCode">Code postal</label>
            <input
              {...registerAddress("postalCode")}
              type="postalCode"
              id="postalCode"
              className="border rounded h-[45px] p-2 border-gray-400 my-2 w-full"
            />
            {errorsAddress.postalCode && (
              <p className="text-red-500">{errorsAddress.postalCode.message}</p>
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
