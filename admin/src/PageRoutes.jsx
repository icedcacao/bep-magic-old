import { Routes, Route } from "react-router-dom";
import WithNavLayout from "./components/layout/WithNavLayout";
import Dashboard from "./pages/Dashboard";
import Foods from "./pages/CRUD/Foods";
import CreateFood from "./pages/CRUD/CreateFood";
import UpdateFood from "./pages/CRUD/UpdateFood";
import Categories from "./pages/CRUD/Categories";
import CreateCategory from "./pages/CRUD/CreateCategory";
import UpdateCategory from "./pages/CRUD/UpdateCategory";
import WithoutNavLayout from "./components/layout/WithoutNavLayout";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<WithNavLayout />}>
        <Route exact path="/" element={<Dashboard />} />
        {/* Food Routes */}
        <Route path="food">
          <Route index element={<Foods />} />
          <Route path="create" element={<CreateFood />} />
          <Route path="update/:id" element={<UpdateFood />} />
        </Route>
        {/* Category Routes */}
        <Route path="category">
          <Route index element={<Categories />} />
          <Route path="create" element={<CreateCategory />} />
          <Route path="update/:id" element={<UpdateCategory />} />
        </Route>
      </Route>
      <Route element={<WithoutNavLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
