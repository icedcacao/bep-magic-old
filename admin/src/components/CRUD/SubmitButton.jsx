export default function SubmitButton({ label }) {
  return (
    <button
      type="submit"
      className="text-white justify-center bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {label}
    </button>
  );
}
