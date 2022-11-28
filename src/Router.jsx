import { Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import ListRecipes from "./pages/ListRecipes";
import { NotFound } from "./pages/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<ListRecipes />} exact />
      <Route path="/recipe/:recipe" element={<Table />} exact />
      <Route path="*" element={<NotFound />} exact />
    </Routes>
  );
};
