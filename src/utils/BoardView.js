    import React, { useState, useEffect } from 'react';

    const BoardView = ({ data, actions }) => {
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 6;
      const accountType = ['Regular', 'Premium'];

      const calculateTotal = (items) => {
        return items.reduce((acc, item) => acc + (parseFloat(item.pricePerItem.replace('$', '')) * item.quantity), 0);
      };

      const groupedData = accountType.reduce((acc, type) => {
        const typeData = data.filter(item => item.accountType === type);
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        acc[type] = typeData.slice(indexOfFirstItem, indexOfLastItem);
        return acc;
      }, {});

      return (
        <div>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {accountType.map(type => (
              <div key={type} className="flex-none w-96 bg-gradient-to-b from-gray-50 to-gray-100 p-4 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-blue-600 mb-4">{type}</h2>
                <div className="space-y-4">
                  {groupedData[type].map(item => (
                    <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                      <h3 className="text-lg font-semibold text-gray-800">{item.ProductName}</h3>
                      <div className="mt-2 space-y-2 text-sm">
                        <p className="text-gray-600">Supplier: {item.supplierEmail}</p>
                        <p className="text-gray-600">Phone: {item.phoneNumber}</p>
                        <p className="text-gray-600">Date: {item.DateAdded}</p>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <p className="font-semibold text-blue-600">Price: {item.pricePerItem}</p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button onClick={() => actions.onView(item.id)} 
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                          View
                        </button>
                        <button onClick={() => actions.onEdit(item.id)}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                          Edit
                        </button>
                        <button onClick={() => actions.onDelete(item.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                    <p className="text-lg font-bold text-blue-800">
                      Total Value: ${calculateTotal(groupedData[type]).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default BoardView;