import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = JSON.parse(localStorage.getItem('products'))?.find(
    p => p.id === parseInt(id)
  );

  return (
    <div className="max-w-2xl mx-auto mt-32 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Product Details</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-bold">Product Name:</label>
            <p>{product?.ProductName}</p>
          </div>
          <div>
            <label className="font-bold">Supplier Email:</label>
            <p>{product?.supplierEmail}</p>
          </div>
          <div>
            <label className="font-bold">Quantity:</label>
            <p>{product?.quantity}</p>
          </div>
          <div>
            <label className="font-bold">Price:</label>
            <p>{product?.pricePerItem}</p>
          </div>
          <div>
            <label className="font-bold">Phone Number:</label>
            <p>{product?.phoneNumber}</p>
          </div>
          <div>
            <label className="font-bold">Account Type:</label>
            <p>{product?.accountType}</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/products')}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};


export default ViewProduct;
