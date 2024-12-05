import React, { useState, useEffect,useMemo } from 'react';
import { deleteProduct } from '../data/ProductTable';
import { FaSearch } from "react-icons/fa";
import { IoGridOutline, IoListOutline } from "react-icons/io5";
import TableView from '../utils/TableView';
import BoardView from '../utils/BoardView';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { withTranslation } from '../utils/withTranslation';
import { useTheme } from '../context/ThemeContext';

const Products = ({ t }) => { 
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    keyword: '',
    dateRange: { start: '', end: '' },
    accountType: '',
    category: 'All Products'
  });
  const [view, setView] = useState('table');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    try {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductList(storedProducts);
    } catch (error) {
      toast.error('Error loading products');
      console.error('Loading products failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    return productList.filter(product => {
      const matchesKeyword = !filters.keyword || 
        product.ProductName?.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        product.supplierEmail?.toLowerCase().includes(filters.keyword.toLowerCase());
      
      const matchesAccountType = !filters.accountType || 
        product.accountType === filters.accountType;
      
      const matchesDateRange = (!filters.dateRange.start || 
        product.DateAdded >= filters.dateRange.start) &&
        (!filters.dateRange.end || product.DateAdded <= filters.dateRange.end);

      return matchesKeyword && matchesAccountType && matchesDateRange;
    });
  }, [productList, filters]);

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDelete = async (id) => {
    if (!id) return;
    
    try {
      const updatedProducts = deleteProduct(id);
      setProductList(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Failed to delete product');
      console.error('Delete operation failed:', error);
    }
  };

  const handleEdit = (id) => {
    if (id) navigate(`/edit-product/${id}`);
  };

  const handleView = (id) => {
    if (id) navigate(`/view-product/${id}`);
  };

  const categories = [' Products'];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    //  {/* theres a bug muri theme changing nza gukoraho*\}

    <main className={`min-h-screen bg-gradient-to-b from-white to-gray-50 text-black dark:bg-gray-800 dark:text-white ${isDarkMode ? ' text-light-text':'bg-dark-primary text-light-text' } transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='pt-[140px] pb-8'>
          <div className='flex items-center justify-between'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
              {t('products')}
            </h1>
            <button 
              onClick={() => navigate('/add-product')}
              className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
              transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95'>
              {t('addProduct')}
            </button>
          </div>

          <nav className='mt-8'>
            <ul className='flex space-x-8 border-b'>
              {categories.map((category) => (
                <li key={category} className='group pb-2'>
                  <button
                    onClick={() => setFilters(prev => ({ ...prev, category }))}                    className={`text-gray-600 hover:text-blue-600 font-medium transition-colors
                      ${filters.category === category ? 'text-blue-600' : ''}`}
                  >
                    {t(category)}
                  </button>
                  <div className={`h-1 w-full transition-transform origin-left 
                    bg-gradient-to-r from-blue-600 to-purple-600
                    ${filters.category === category ? 'scale-x-100' : 'scale-x-0'}`}>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='flex flex-col gap-4 mb-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4 flex-1 max-w-md'>
              <input
                type="text"
                name="keyword"
                value={filters.keyword}
                onChange={handleFilter}
                className="w-full pl-4 pr-10 py-2 rounded-xl border border-gray-200 focus:border-blue-500 
                  focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                placeholder={t('searchProducts')}
              />
            </div>

            <div className='flex items-center gap-3 rounded-xl p-2 bg-slate-300'>
              <button 
                onClick={() => setView('table')}
                className={`p-2 rounded-lg transition-all ${view === 'table' ? 
                  'bg-slate-400 text-blue-600' : 'text-gray-400 hover:text-blue-600'}`}
              >
                <IoListOutline size={24} />
              </button>
              <button 
                onClick={() => setView('grid')}
                className={`p-2 rounded-lg transition-all ${view === 'grid' ? 
                  'bg-slate-400 text-blue-600' : 'text-gray-400 hover:text-blue-600'}`}
              >
                <IoGridOutline size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
          {view === 'table' ? (
            <TableView 
              data={filteredProducts} 
              actions={{
                onDelete: handleDelete,
                onEdit: handleEdit,
                onView: handleView
              }}
            />
          ) : (
            <BoardView 
              data={filteredProducts}
              actions={{
                onDelete: handleDelete,
                onEdit: handleEdit,
                onView: handleView
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default withTranslation(Products);

// export default Products;