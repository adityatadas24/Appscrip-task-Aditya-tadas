"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import '../Dashboard/dash.css'
import Header from "../components/Header/Header";
import DropdownBtn from "../components/DropDownBtn/DropdownBtn";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductCard from "../components/Products/ProductCard";
import Footer from "../components/Footer/Footer";

export default function Dashboard() {

  const [products, setProducts] = useState([]);
  const [isFilterVisible, setFilterVisible] = useState(true);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };
  
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      
      <Header />

      <main className="main container">
        <p className="home">
          HOME | <span>SHOP</span>
        </p>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a
          beatae sunt velit eveniet laboriosam aliquid, facere ad pariatur illo
          quasi recusandae.
        </p>

        <DropdownBtn
          toggleFilter={toggleFilter}
          isFilterVisible={isFilterVisible}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
        <Sidebar isFilterVisible={isFilterVisible} />

          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
