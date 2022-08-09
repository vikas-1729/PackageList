import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

import Product from "./Product";
import AddProduct from "./AddProduct";

ProductList = () => {
  const [productArray, setProductList] = useState([
    { name: "laptop", quantity: 10, id: uuidv4() },
    { name: "phone", quantity: 100, id: uuidv4() },
  ]);
  const addProduct = (item) => {
    if (!item.name || !item.quantity) {
      console.log("name and qty are required field");
    }

    if (item.quantity < 0) {
      console.log("qty should be mor ethan zero");
    }
    item.id = uuidv4();
    const newArray = [item, ...productArray];
    setProductList(newArray);
  };

  const deleteProduct = (id) => {
    var newProductList = productArray.filter((item) => {
      return item.id != id;
    });

    setProductList(newProductList);
  };
  return (
    <div>
      <div className="product-list">
        {productArray.map((item, index) => {
          return (
            <Product key={index} item={item} deleteProduct={deleteProduct} />
          );
        })}
      </div>
      <AddProduct addProduct={addProduct} />
    </div>
  );
};

export default ProductList;
