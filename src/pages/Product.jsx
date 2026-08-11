import { useState } from "react";
import ProductForm from "../components/form";
import ProductTable from "../components/Tabel";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Product() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setProducts((prevProducts) => [...prevProducts, { name, price, stock }]);

    setName("");
    setPrice("");
    setStock("");
  }

  return (
    <>
      <Header />
      <div className="max-w-xl m-auto my-20">
        <ProductForm
          name={name}
          price={price}
          stock={stock}
          onNameChange={setName}
          onPriceChange={setPrice}
          onStockChange={setStock}
          onSubmit={handleSubmit}
        />

        <ProductTable products={products} />
      </div>
      <Footer />
    </>
  );
}

export default Product;
