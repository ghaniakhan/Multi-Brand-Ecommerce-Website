import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/ProductList.css";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/hello/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`); // Redirects to the EditProduct component
  };
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`http://localhost:5000/hello/products/${productId}`)
        .then((response) => {
          alert("Product deleted successfully!");
          // Optionally update the product list after deletion
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.product_id !== productId)
          );
        })
        .catch((err) => console.error("Error deleting product:", err));
    }
  };
  

  return (
    <div className="product-table-container">
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>
                <img
                  src={product.image_path}
                  alt={product.name}
                  className="product-image"
                />
              </td>
              <td>{product.product_name}</td>
              <td>€{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.brand_name || "No Brand"}</td>
              <td>
              <button onClick={() => handleEdit(product.product_id)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(product.product_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/add-product")} className="add-button">
        Add Product
      </button>
    </div>
  );
};

export default ProductTable;
