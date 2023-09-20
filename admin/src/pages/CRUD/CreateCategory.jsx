import InputString from "../../components/CRUD/InputString";
import Header from "../../components/Header/Header";
import { useState } from "react";
import SubmitButton from "../../components/CRUD/SubmitButton";
import InputSelect from "../../components/CRUD/InputSelect";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function CreateCategory() {
  const [formValue, setformValue] = useState({
    name: "",
  });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (e) => {
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header title="Create category" />
      <div className="p-4">
        <form>
          <div className="space-y-4">
            <InputString
              labelName="Name"
              name="name"
              placeholder="Type category name"
              value={formValue.name}
              handleChange={handleChange}
            />
            <InputSelect
              labelName="Food list"
              name="foods"
              options={options}
              value={selectedOptions}
              handleChange={(selectedOptions) =>
                setSelectedOptions(selectedOptions)
              }
            />
            <SubmitButton label="Create category" />
          </div>
        </form>
      </div>
    </>
  );
}
