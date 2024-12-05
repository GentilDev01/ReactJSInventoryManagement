import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const EditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) || []
    const product = products.find(p => p.id === parseInt(id))
    if (product) {
      setFormData(product)
    } else {
      toast.error('Product not found')
      navigate('/products')
    }
  }, [id, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const products = JSON.parse(localStorage.getItem('products')) || []
      const updatedProducts = products.map(product => 
        product.id === parseInt(id) ? formData : product
      )
      localStorage.setItem('products', JSON.stringify(updatedProducts))
      toast.success('Product updated successfully')
      navigate('/products')
    } catch (error) {
      toast.error('Failed to update product')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (!formData) return null

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      
    </div>
  )
}

export default EditProduct
