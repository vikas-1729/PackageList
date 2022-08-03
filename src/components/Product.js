Product = (props) => {
  const { item, deleteProduct } = props;
  const handleDelete = (e) => {
    e.preventDefault();
    deleteProduct(item.id);
  };
  return (
    <div>
      <p>Name {item.name}</p>
      <p>Quantity : {item.quantity}</p>
      <button
        onClick={(e) => {
          handleDelete(e);
        }}
      >
        Delete Product
      </button>
    </div>
  );
};

export default Product;
