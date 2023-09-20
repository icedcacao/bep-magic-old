import Select from "react-select";
export default function InputSelect({
  labelName,
  name,
  options,
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
      <Select
        isMulti
        name={name}
        className="w-1/2 xl:w-1/3"
        options={options}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
