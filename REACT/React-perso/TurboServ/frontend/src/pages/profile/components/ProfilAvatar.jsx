import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import toast from "react-hot-toast";
export default function ProfilAvatar() {
  const { user, login } = useContext(AuthContext);
  function submit(values) {
    console.log(values);
  }
  const [preview, setPreview] = useState(user.avatar);

  async function handleAvatarChange(event) {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("avatar", file);
      formData.append("userId", user._id);

      if (file) {
        const response = await fetch(
          "http://localhost:3000/user/avatar/" + user._id,
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.status === 200) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
          };
          reader.readAsDataURL(file);
          const feedback = await response.json();
          login(feedback);
          toast.success("Vous avez changé votre avatar");
        } else {
          toast.error("Un problème est survenue");
        }
      } else {
        toast.error("Un problème est survenue");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="border mt-4 mx-4 flex flex-col items-center justify-between p-3 md:mx-2 ">
      <h2 className="text-xl font-bold">Gestion de mon compte</h2>
      <form onSubmit={submit} className="flex flex-col items-center">
        <img
          className="rounded mt-4 w-[300px] h-[300px] object-cover"
          src={preview ? preview : "/src/assets/images/profil/avatar.svg"}
          alt="avatar"
        />

        <input
          id="avatar"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleAvatarChange}
        />
        <label
          htmlFor="avatar"
          className="mt-20 mb-20 inline-block bg-primary text-white px-4 py-2 rounded cursor-pointer hover:bg-hover transition"
        >
          Changer l'avatar
        </label>
      </form>
      <hr className="w-full mt-4 mb-1" />
      <form action="" className="mt-3">
        <button className="border rounded px-4 h-[40px] hover:bg-black hover:text-white transition cursor-pointer mb-8">
          Changer de mot de passe ?
        </button>
      </form>
    </div>
  );
}
