import Navigation from "./components/Navigation";
import Categories from "./pages/CRUD/Categories";
import CreateFood from "./pages/CRUD/CreateFood";
import Foods from "./pages/CRUD/Foods";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <>
      <Navigation />
      <Foods />
    </>
  );
}
