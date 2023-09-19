export default function InputString({
  labelName,
  name,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor={name}
      >
        {labelName}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/3 p-2.5"
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
