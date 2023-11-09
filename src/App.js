import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faMagnifyingGlass,
  faBars,
  faLocationArrow,
  faPhone,
  faLock,
  faMagnifyingGlassPlus,
  faCaretRight,
  faCaretLeft,
  faClock,
  faMobileScreenButton,
  faComments,
  faHouse,
  faFilter,
  faArrowRightToBracket,
  faCartPlus,
  faRectangleXmark,
  faTrash,
  faTrashCan,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";

import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import Portfolio from "./pages/Portfolio";
import Error404 from "./pages/Error404";
import Error503 from "./pages/Error503";
import ProtectedRout from "./components/ProtectedRout";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";

library.add(
  fab,
  faMobileScreenButton,
  faBagShopping,
  faMagnifyingGlass,
  faBars,
  faLocationArrow,
  faPhone,
  faLock,
  faClock,
  faMagnifyingGlassPlus,
  faCaretRight,
  faCaretLeft,
  faComments,
  faHouse,
  faFilter,
  faArrowRightToBracket,
  faCartPlus,
  faRectangleXmark,
  faTrashCan,
  faPlus,
  faMinus
);

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="products/:id" element={<Product />}></Route>
          <Route path="shoppingcart" element={<ShoppingCart/>}></Route>
          <Route
            path="portfolio"
            element={
              <ProtectedRout>
                <Portfolio />
              </ProtectedRout>
            }
          ></Route>
          <Route path="error404" element={<Error404 />}></Route>
          <Route path="error503" element={<Error503 />}></Route>
        </Route>
        {/* <Route path='/test' element={<Test/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
