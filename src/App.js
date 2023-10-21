import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductPage,
  SingleProductPage,
  // ProtectedRoute,
} from "./pages";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
