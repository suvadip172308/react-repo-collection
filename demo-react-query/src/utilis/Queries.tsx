import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProducts, fetchProductDetails, addNewProduct, updateProduct } from './ApiUser';
import { Product } from '../models/Product';

export const useAllProductQuery = () => {
  const usersFetchQuery = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log('ALL PRODUCTS....');
      return await fetchProducts();
    },
  });

  return usersFetchQuery;
};

export const useProductDeatilsQuery = (productId: string) => {
  const userDetailsQuery = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      console.log('SINGLE PRODUCT....')
      return await fetchProductDetails(productId);
    }
  });

  return userDetailsQuery;
};

export const useAddProductQuery = () => {
  const queryClient = useQueryClient();
  
  const {
    isSuccess,
    isPending,
    mutate: AddProductCall
  } = useMutation({
    mutationFn: (product: Omit<Product, 'id'>) => {
      return addNewProduct(product);
    },
    onSuccess: () => {
      console.log('ON SUCCESS');
      queryClient.invalidateQueries({
        queryKey: ['products'],
        exact: true
      });
    }
  });

  return {
    isSuccess,
    AddProductCall,
    isPending
  };
}

export const useUpdateProductQuery = () => {
  const queryClient = useQueryClient();

  useMutation({
    mutationFn: async ({id, payload}: { id: string, payload: Omit<Product, 'id'>}) => {
      return updateProduct(id, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products']
      })
    }
  })
}
