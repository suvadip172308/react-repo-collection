export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
}

export interface ProductProps {
  products: Product[];
}

export interface ProductDetailsProps {
  productId: string;
}

export interface AddUserProps {
  onAddProduct: (user: Omit<Product, 'id'>) => void
}

