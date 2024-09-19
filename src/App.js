import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<MenuPage />} />
      </Route>
    </Routes>
  );
}

export default App;
