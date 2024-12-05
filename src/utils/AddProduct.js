    import React, { useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { toast } from 'react-hot-toast'

    const AddProduct = () => {
      const navigate = useNavigate()
      const [formData, setFormData] = useState({
        id: Date.now(),
        ProductName: '',
        supplierEmail: '',
        quantity: 0,
        pricePerItem: '',
        phoneNumber: '',
        DateAdded: new Date().toISOString().split('T')[0],
        accountType: ''
      })

      const handleSubmit = (e) => {
        e.preventDefault()
        try {
          const existingProducts = JSON.parse(localStorage.getItem('products')) || []
          const updatedProducts = [...existingProducts, formData]
          localStorage.setItem('products', JSON.stringify(updatedProducts))
          toast.success('Product added successfully')
          navigate('/products')
        } catch (error) {
          toast.error('Failed to add product')
        }
      }

      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
          ...prev,
          [name]: value
        }))
      }

      return (
        <div className="max-w-2xl mx-auto mt-32 p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="ProductName"
                placeholder="Product Name"
                required
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="supplierEmail"
                placeholder="Supplier Email"
                required
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                required
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="pricePerItem"
                placeholder="Price per Item ($)"
                required
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="accountType"
                required
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Account Type</option>
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={() => navigate('/products')}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg 
                hover:opacity-90 transition-opacity"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      )
    }

    export default AddProduct