import NavBar from "./layouts/Navbar";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./layouts/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <NavBar />
      <main className="flex-shrink-0 vh-100">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
