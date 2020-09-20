import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import ProductCard from "./components/ProductCard";

function App() {
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
    console.log(product);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("");
      const parsedResponse = await response.json();
      setProducts(parsedResponse);
    })();
  }, []);

  return (
    <div>
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {section.products.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    onClick={addProduct}
                    key={product.title}
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
