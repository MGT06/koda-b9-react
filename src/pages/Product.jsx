import { useState } from "react";
import ProductForm from "../components/form";
import ProductTable from "../components/Tabel";

function Product() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 


    setProducts((prevProducts) => [
      ...prevProducts,
      {name, price, stock},
    ]);

    setName("");
    setPrice("");
    setStock("");
  }

  return (
      <div className="max-w-xl m-auto mt-20">
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
  );
}

export default Product;
