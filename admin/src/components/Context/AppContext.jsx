import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
// Data encapsulation later
export const AppProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchFoods = async () => {
    try {
      const url = `http://localhost:3000/food`;
      const response = await axios({
        method: "get",
        url: url,
      });
      setFoods(response.data);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const url = `http://localhost:3000/category`;
      const response = await axios({
        method: "get",
        url: url,
      });
      setCategories(response.data);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        foods,
        fetchFoods,
        categories,
        fetchCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
