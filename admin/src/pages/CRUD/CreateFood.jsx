import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputString from "../../components/CRUD/InputString";
import Header from "../../components/Header/Header";
import SubmitButton from "../../components/CRUD/SubmitButton";
import InputImage from "../../components/CRUD/InputImage";
import axios from "axios";

export default function CreateFood() {
  const [formValue, setformValue] = useState({
    name: "",
    price: "",
    calories: "",
    protein: "",
    fat: "",
    carb: "",
    fiber: "",
    vitamins: "",
    others: "",
  });
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const createFoodFormData = new FormData();
    createFoodFormData.append("name", formValue.name);
    createFoodFormData.append("price", formValue.price);
    createFoodFormData.append("image", file);
    createFoodFormData.append("calories", formValue.calories);
    createFoodFormData.append("protein", formValue.protein);
    createFoodFormData.append("fat", formValue.fat);
    createFoodFormData.append("carb", formValue.carb);
    createFoodFormData.append("fiber", formValue.fiber);
    createFoodFormData.append("others", formValue.others);
    try {
      const url = `http://localhost:3000/food`;
      const response = await axios({
        method: "post",
        url: url,
        data: createFoodFormData,
      });
      if (response.status == 200) {
        toast.success("Sucessfully updated");
      } else {
        toast.error("Unable to submit");
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to submit");
    }
  };
  return (
    <>
      <Header title="Create food" />
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <InputString
              labelName="Name"
              name="name"
              placeholder="Type food name"
              value={formValue.name}
              handleChange={handleChange}
            />
            <InputString
              labelName="Price"
              name="price"
              placeholder="Type price"
              value={formValue.price}
              handleChange={handleChange}
            />
            <InputImage
              label="Image"
              name="image"
              handleChange={(e) => setFile(e.target.files[0])}
            />
            <InputString
              labelName="Calories"
              name="calories"
              placeholder="Type calories"
              value={formValue.calories}
              handleChange={handleChange}
            />
            <InputString
              labelName="Protein"
              name="protein"
              placeholder="Type protein"
              value={formValue.protein}
              handleChange={handleChange}
            />
            <InputString
              labelName="Fat"
              name="fat"
              placeholder="Type fat"
              value={formValue.fat}
              handleChange={handleChange}
            />
            <InputString
              labelName="Carb"
              name="carb"
              placeholder="Type carb"
              value={formValue.carb}
              handleChange={handleChange}
            />
            <InputString
              labelName="Fiber"
              name="fiber"
              placeholder="Type fiber"
              value={formValue.fiber}
              handleChange={handleChange}
            />
            <InputString
              labelName="Vitamins"
              name="vitamins"
              placeholder="Type vitamins"
              value={formValue.vitamins}
              handleChange={handleChange}
            />
            <InputString
              labelName="Others"
              name="others"
              placeholder="Type others"
              value={formValue.others}
              handleChange={handleChange}
            />
            <SubmitButton label="Create food" />
          </div>
        </form>
      </div>
    </>
  );
}
