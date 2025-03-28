export default function Button({ text }) {
  return (
    <a
      href="#"
      className="bg-stone-900 p-3 rounded-lg border border-solid  border-stone-600 text-white text-xs md:text-lg  lg:text-lg"
    >
      {text}
    </a>
  );
}
