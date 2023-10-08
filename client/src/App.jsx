import NavBar from "./layouts/Navbar";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AdminProducts from "./pages/admin/Products";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer";
import Login from "./pages/Login";

import { PrivateRoute } from "./components/Routes";

const adminRoutes = [
  { path: "/dashboard", component: "", role: "admin" },
  { path: "/products", component: <AdminProducts />, role: "admin" },
  { path: "/orders", component: <AdminProducts />, role: "admin" },
  { path: "/users", component: "", role: "admin" },
];

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <NavBar />
        <main className="flex-shrink-0 vh-100">
          <div className="container">
            <Routes>
              <Route path="/" element=<Home /> />
              <Route path="/cart" element=<Cart /> />
              <Route path="/contact" element=<Contact /> />
              <Route path="/login" element=<Login /> />
              <Route path="/products" element=<Products /> />
              {adminRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={`/admin${route?.path}`}
                  element={
                    <PrivateRoute role={route?.role}>
                      {route?.component}
                    </PrivateRoute>
                  }
                />
              ))}

              <Route path="/products/:id" element=<ProductDetail /> />
              <Route path="*" element=<ErrorPage /> />
            </Routes>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
Admin
/admin/* (check )
Public
/* (no check)


Public
Private  (Roles based check)
Protected (Valid JWT Token check)
*/
