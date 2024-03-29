import React, { useState, useEffect } from "react";
import prods from "./products";

import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import CartIndicator from "./components/CartIndicator";
import CartComponent from "./components/CartComponent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [products, setProducts] = useState(prods);

  // function addProduct(product) {
  //   setSelectedItem(product);
  //   setIsOpen(!isOpen);
  // }

  // function addItem(item, amount) {
  //   let auxCartItems = cartItems;
  //   // auxCartItems.push({ item, amount });
  //   setCartItems(auxCartItems);
  //   setIsOpen(!isOpen);
  // }

  function handleCart() {
    setIsCartOpen(!isCartOpen);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("");
      const parsedResponse = await response.json();
      setProducts(parsedResponse);
    })();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        height: "100%",
      }}
    >
      {isCartOpen ? (
        <CartComponent closeCart={handleCart} cartItems={cartItems} />
      ) : null}
      {isOpen ? (
        <Modal item={selectedItem} setIsOpen={setIsOpen} addItem={() => {}} />
      ) : null}
      <Header image="https://personalwebsite-5d16b.web.app/images/nrdLogo.png" />
      {products.map((section) => {
        return (
          <div
            key={section.category}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "wrap",
              boxSizing: "border-box",
              paddingBottom: "5rem",
            }}
          >
            <SectionHeader title={section.category} />
            <div
              className="sectionProductsDiv"
              style={{
                width: "100%",
                maxWidth: "1200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {section.products.map((product, index) => {
                return (
                  <ProductCard
                    product={product}
                    onClick={() => {}}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      {cartItems.length ? <CartIndicator openCart={handleCart} /> : null}
    </div>
  );
}

export default App;
