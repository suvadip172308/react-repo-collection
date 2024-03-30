import { Product } from "../models/Product";

export const fetchProducts = () => {
  return fetch('https://dummyjson.com/products')
  .then(res => res.json())
};

export const fetchProductDetails = (productId: string) => {
  return fetch(`https://dummyjson.com/products/${productId}`)
  .then(res => res.json())
};

export const addNewProduct = (product: Omit<Product, 'id'>) => {
  return fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    body: JSON.stringify(
      {...product}
    ),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
}

export const updateProduct = (id: string, product: Omit<Product, 'id'>) => {
  return fetch(`https://dummyjson.com/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(
      {...product}
    ),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
}