import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./component/AdminDashboard/Sidebar";
import Navbar from "./component/AdminDashboard/navbar";
import Dashboard from "./component/AdminDashboard/AdminDashboard";
import KFCPage from "./foodpanda/KFC";
import MacdonaldPage from "./foodpanda/Macdonald";
import JonnysPage from "./foodpanda/jonny";
import KababjeesPage from "./foodpanda/Kababjees";
import FoodPage from "./foodpanda/food";
import Khaddi from './brandwear/khaddi';
import Sapphire from './brandwear/Sapphire';
import Alkaram from './brandwear/Alkaram';
import SignIn from "./component/signin";
import SignUp from "./component/signup";
import J from './brandwear/J';
import SamsungPage from "./electronics/samsung";
import AdminDashboard from "./component/AdminDashboard/AdminDashboard";
import Settings from "./component/AdminDashboard/Settings";
import UserDashboard from "./component/UserDashboard";
import ApplePage from "./electronics/apple";
import PellPage from "./electronics/pell";
import DawlancePage from "./electronics/dawlance";
import EuroPage from "./groceryandcrockery/eurostore";
import AlfatahPage from "./groceryandcrockery/alfatah";
import ImtiazPage from "./groceryandcrockery/imtiaz";
import CarrefourPage from "./groceryandcrockery/carrefour";
import ProductTable from "./component/AdminDashboard/ProductList";
import './App.css';
import AddProduct from "./component/AdminDashboard/AddProduct";
import EditProduct from "./component/AdminDashboard/EditProduct";
import ContactForm from "./component/Contact";
import FetchContact from './component/AdminDashboard/FetchContact';
import CartPage from "./component/Cart";
import Checkout from './component/Checkout';
import Home from "./component/home";
import ProductsPage from "./component/user-products";
import BrandsPage from "./component/BrandsPages"; 
import ProductDetailsPage from "./brandwear/ProductDetails";

const App = () => {
  const location = useLocation(); // Get the current location

  const hideNavbar = [
    "/signup", 
    "/signin", 
    "/user-dashboard", 
    "/user-products", 
    "/contact", 
    "/brands/clothes",
    "/dresses/j",
    "/dresses/khaddi",
    "/dresses/alkaram",
    "/dresses/sapphire",
    "/brands/electronics",
    "/electronics/apple",
    "/electronics/dawlance",
    "/electronics/pell",
    "/electronics/samsung",
    "/brands/foods",
    "/foods/food",
    "/foods/KFC",
    "/foods/Macdonald",
    "/foods/Jonnys",
    "/foods/Kababjees",
    "/brands/groceries",
    "/groceryandcrockery/eurostore",
    "/groceryandcrockery/alfatah",
"/groceryandcrockery/imtiaz",
"/groceryandcrockery/carrefour"

  ].some(path => location.pathname.startsWith(path));
  

  // Define the routes where the Sidebar should be visible
  const adminRoutes = [
    "/admin",
    "/admin-dashboard",
    "/products",
    "/settings",
    "/add-product",
    "/edit-product/:id",
    "/admincontact",
    
  ];


  
  // Check if the current path matches any of the admin routes
  const showSidebar = adminRoutes.some((route) =>
    location.pathname.startsWith(route.replace(":id", ""))
  );

  return (
    <div className="app">
      {showSidebar && <Sidebar />} {/* Conditionally render Sidebar */}
      {!hideNavbar && <Navbar />} {/* Only render Navbar if not on / or /login */}

      <div className="main-content">
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/foods/food" element={<FoodPage />} />
          <Route path="/foods/KFC" element={<KFCPage />} />
          <Route path="/foods/Macdonald" element={<MacdonaldPage />} />
          <Route path="/foods/Jonnys" element={<JonnysPage />} />
          <Route path="/foods/Kababjees" element={<KababjeesPage />} />
          <Route path="/dresses/khaddi" element={<Khaddi />} />
          <Route path="/dresses/sapphire" element={<Sapphire />} />
          <Route path="/dresses/alkaram" element={<Alkaram />} />
          <Route path="/dresses/j" element={<J />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/electronics/samsung" element={<SamsungPage />} />
          <Route path="/electronics/apple" element={<ApplePage />} />
          <Route path="/electronics/pell" element={<PellPage />} />
          <Route path="/electronics/dawlance" element={<DawlancePage />} />
          <Route path="/groceryandcrockery/eurostore" element={<EuroPage />} />
          <Route path="/groceryandcrockery/alfatah" element={<AlfatahPage />} />
          <Route path="/groceryandcrockery/imtiaz" element={<ImtiazPage />} />
          <Route path="/groceryandcrockery/carrefour" element={<CarrefourPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/products" element={<ProductTable />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/admincontact" element={<FetchContact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/user-products" element={<ProductsPage/>} />
          <Route path="/brands/:category" element={<BrandsPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage/>} />
        </Routes>
      </div>
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);