import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import { useState } from "react";
import Confirmation from "./Confirmation";
import Main from "./Main";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import AddCategories from "./AddCategories";
import PurchaseLog from "./PurchaseLog";
import User from "./User";






function App() {
  const [confo, setConfo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Academics");
  const [product, setProduct] = useState("haha");

  function setProductDetails(data){
    setProduct(data);
  }
  function selectCategory(data){
    setSelectedCategory(data);
   }

  function setConfirm(data){
    setConfo(data);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin setConfirm={setConfirm}   />} />
          <Route path="confirmation" element={<Confirmation confo = {confo}  />} />
          <Route path="main" element={<Main selectCategory={selectCategory} setProductDetails={setProductDetails}/>} />
          <Route path="products" element={<Products category = {selectedCategory} setProductDetails={setProductDetails}/>} />
          <Route path="productdetails" element={<ProductDetails product={product}/>} />
          <Route path="addcategories" element={<AddCategories product={product}/>} />
          <Route path="purchaselog" element={<PurchaseLog setProductDetails={setProductDetails}/>} />
          <Route path="manageuser" element={<User/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
