export default function InputImage({ label, name, handleChange }) {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="text-gray-400 border rounded-lg file:bg-gray-50 file:text-gray-500 hover:file:bg-gray-100 file:rounded-lg file:rounded-tr-none file:rounded-br-none file:px-4 file:py-2 file:mr-4 file:border-none hover:cursor-pointer"
        type="file"
        name={name}
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}
