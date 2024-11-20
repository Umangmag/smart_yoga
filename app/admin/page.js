"use client"; // Client Component for interactivity

import { useState, useEffect } from 'react';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
  
        // Check if the response contains the products array or handle it accordingly
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data.products && Array.isArray(data.products)) {
          // If the data is wrapped in an object, extract the products array
          setProducts(data.products);
        } else {
          console.error('Expected an array of products, received:', data);
          setProducts([]); // Fallback to empty array if data is not as expected
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Fallback to empty array on error
      }
    };
  
    fetchProducts();
  }, []);
  

  const handleAddProduct = async () => {
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        const addedProduct = await res.json();
        setProducts((prevProducts) => [...prevProducts, addedProduct]);
        setNewProduct({ name: '', price: '', description: '' });
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Form to Add Product */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Add Product</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="block mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="block mb-2 p-2 border rounded w-full"
        />
        <textarea
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="block mb-2 p-2 border rounded w-full"
        />
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Product
        </button>
      </div>

      {/* Display Products */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Products List</h2>
        {Array.isArray(products) && products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product._id} className="mb-2">
                <strong>{product.name}</strong> - {product.price}
                <p>{product.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
