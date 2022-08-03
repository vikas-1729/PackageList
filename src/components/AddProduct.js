import { useState } from "react";

AddProduct = (props) => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);

  const { addProduct } = props;

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct({ name: name, quantity: qty });
    setName("");
    setQty(0);
  };
  return (
    <div className="add-product">
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="enter product name"
      />
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={qty}
        onChange={(e) => {
          setQty(e.target.value);
        }}
        placeholder="enter qty"
      />
      <button
        type="button"
        onClick={(e) => {
          handleAddProduct(e);
        }}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
