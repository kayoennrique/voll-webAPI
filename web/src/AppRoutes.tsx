import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageDefault from "./pages/PageDefault";
import PageDefaultForm from "./pages/PageDefaultForm";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<PageDefaultForm />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;