import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [products, setProducts] = useState([
    {
      category: "Pizzas",
      products: [
        {
          title: "Pizza P",
          description: "pizza pequena e boa",
          price: "24,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
      ],
    },
  ]);

  function addProduct(product) {
    setSelectedItem(product);
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("");
      const parsedResponse = await response.json();
      setProducts(parsedResponse);
    })();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {isOpen ? <Modal item={selectedItem} setIsOpen={setIsOpen} /> : null}
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
                    onClick={addProduct}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
