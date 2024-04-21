import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Page404 } from "./pages/Page404";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Shops } from "./pages/Shops";
import { Products } from "./pages/Products";
import { SingleProduct } from "./pages/SingleProduct";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route
            path="/singleproduct/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route path="/shops" element={<Shops></Shops>}></Route>

          <Route
            path="/:shopname/:shopid"
            element={<Products></Products>}
          ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>

          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
