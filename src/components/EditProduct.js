import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ProductName: '',
    supplierEmail: '',
    quantity: '',
    pricePerItem: '',
    phoneNumber: '',
    accountType: ''
  });

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      setFormData(product);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const updatedProducts = products.map(product => 
        product.id === parseInt(id) ? { ...formData, id: parseInt(id) } : product
      );
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      toast.success('Product updated successfully');
      navigate('/products');
    } catch (error) {
      toast.error('Failed to update product');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-32 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="ProductName"
            value={formData.ProductName}
            onChange={(e) => setFormData({...formData, ProductName: e.target.value})}
            className="w-full p-3 border rounded-lg"
            placeholder="Product Name"
          />
          <input
            type="email"
            name="supplierEmail"
            value={formData.supplierEmail}
            onChange={(e) => setFormData({...formData, supplierEmail: e.target.value})}
            className="w-full p-3 border rounded-lg"
            placeholder="Supplier Email"
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            className="w-full p-3 border rounded-lg"
            placeholder="Quantity"
          />
          <input
            type="text"
            name="pricePerItem"
            value={formData.pricePerItem}
            onChange={(e) => setFormData({...formData, pricePerItem: e.target.value})}
            className="w-full p-3 border rounded-lg"
            placeholder="Price per Item"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
            className="w-full p-3 border rounded-lg"
            placeholder="Phone Number"
          />
          <select
            name="accountType"
            value={formData.accountType}
            onChange={(e) => setFormData({...formData, accountType: e.target.value})}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Account Type</option>
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="px-6 py-2 border rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};


export default EditProduct;
