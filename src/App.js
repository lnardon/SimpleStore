import React, { useState, useEffect } from "react";
import Header from "./components/Header";
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
            "https://res.cloudinary.com/dkstxiqv6/image/upload/c_scale,w_300/v1598116865/pizza-portuguesa_vjylji.png",
        },
        {
          title: "Pizza G",
          description: "pizza grande e tri boa",
          price: "34,99",
          image:
            "https://res.cloudinary.com/dkstxiqv6/image/upload/c_scale,w_300/v1593186792/pizza-de-calabresa_enfb11.jpg",
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
          <div>
            {section.products.map((product) => {
              return <ProductCard product={product} onClick={addProduct} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
