export const initializeLocalStorage = () => {
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
  }
};

let products = [
     { 
       id: 1,
       ProductName: 'Nike shoes',
      supplierEmail: 'jane@acme.com', 
       quantity: 200,
       pricePerItem: '$500',
       phoneNumber: '(201) 555-0124', 
       DateAdded: '2023-09-14', 
       accountType: 'Regular' 
     },
     { 
       id: 2,
       ProductName: 'Balenciaga shoes',
       supplierEmail: 'jacob@summit.com', 
       quantity: 100,
       pricePerItem: '$720',
       phoneNumber: '(907) 555-0101', 
       DateAdded: '2023-09-14', 
       accountType: 'Premium' 
     },
     { 
       id: 3,
       ProductName: 'Adidas shoes',
       supplierEmail: 'dianne@acme.com',
       quantity: 300,
       pricePerItem: '$400',
       phoneNumber: '(201) 555-0124', 
       DateAdded: '2023-09-14', 
       accountType: 'Regular' 
     },
     { 
       id: 4,
       ProductName: 'Puma shoes',
      supplierEmail: 'ralph@summit.com',
      quantity: 150,
      pricePerItem: '$600',
       phoneNumber: '(907) 555-0101', 
       DateAdded: '2023-09-14', 
       accountType: 'Premium' 
     },
     { 
       id: 5,
       ProductName: 'Reebok shoes',
      supplierEmail: 'annette@acme.com', 
       quantity: 250,
       pricePerItem: '$550', 
       phoneNumber: '(201) 555-0124', 
       DateAdded: '2023-09-14', 
       accountType: 'Regular' 
     },
     { 
       id: 6,
       productName: 'Jordans',
      supplierEmail: 'wade@summit.com', 
      quantity: 200,
      pricePerItem: '$800',
       phoneNumber: '(907) 555-0101', 
       DateAdded: '2023-09-14', 
       accountType: 'Premium' 
     },
     { 
       id: 7,
       ProductName: 'Curry shoes',
      supplierEmail: 'guy@acme.com', 
      quantity: 100,
      pricePerItem: '$750',
       phoneNumber: '(201) 555-0124', 
       DateAdded: '2023-09-14', 
       accountType: 'Regular' 
     },
     { 
       id: 8,
       productName: 'Kobe shoes',
      supplierEmail: 'devon@summit.com', 
      quantity: 300,
      pricePerItem: '$650',  
       phoneNumber: '(907) 555-0101', 
       DateAdded: '2023-09-14', 
       accountType: 'Premium' 
     },
     { 
       id: 9,
       ProductName: 'Jumpman shoes',
       supplierEmail: 'kristin@acme.com', 
       quantity: 400,
       pricePerItem: '$600',
       phoneNumber: '(201) 555-0124', 
       DateAdded: '2023-09-14', 
       accountType: 'Regular' 
     }
];

export const deleteProduct = (id) => {
  products = products.filter(product => product.id !== id);
  return products;
};

export const editProduct = (id, updatedProduct) => {
  products = products.map(product => 
    product.id === id ? { ...product, ...updatedProduct } : product
  );
  return products;
};

export default products;

 
