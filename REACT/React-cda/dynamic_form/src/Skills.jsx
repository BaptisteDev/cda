import React from "react";
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Skills() {
  const schema = yup.object({
    username: yup.string().required("Ce champ est obligatoire"),
    email: yup
      .string()
      .required("Ce champ est obligatoire")
      .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, "Format email non valide"),
    technos: yup.array().of(
      yup.object({
        value: yup.string().required("Ce champ ne peut pas être vide"),
      })
    ),
  });

  const defaultValues = {
    username: "",
    email: "",
    technos: [],
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "technos",
    control,
  });

  const submit = (values) => {
    console.log(values);
    console.table(values.technos);
  };

  function addTechno() {
    append({
      value: "",
      level: "Débutant",
    });
  }

  function deleteTechno(id) {
    remove(id);
  }
  return (
    <div className="w-full max-w-md p-6 bg-white shadow-xl rounded">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <div className="flex flex-col mb-2">
          <label htmlFor="username" className="mb-2">
            Pseudo
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <label
          htmlFor="techno"
          className="flex justify-center items-center mb-4"
        >
          <span className="flex-1 mr-4">Technologies</span>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={addTechno}
          >
            +
          </button>
        </label>

        {fields.map((tech, index) => (
          <ul key={index}>
            <li className="mb-4 flex w-full">
              <input
                {...register(`technos[${index}.value]`)}
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="mr-5 boder border-gray-300 rounded px-3 py-2 cursor-pointer"
                {...register(`technos[${index}.level]`)}
              >
                <option value="debutant">Débutant</option>
                <option value="intermediaire">Intermediaire</option>
                <option value="confirme">Confirmé</option>
              </select>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => deleteTechno(index)}
              >
                -
              </button>
            </li>
            {errors.technos?.length && errors.technos[index]?.value && (
              <p className="text-red-500">
                {errors.technos[index].value.message}
              </p>
            )}
          </ul>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
