import { Product } from '../models/Product';
import { useAllProductQuery } from '../utilis/Queries';

const ShowUsers = () => {
  const productsFetchQuery = useAllProductQuery();
  const products = productsFetchQuery.data?.products;

  if(productsFetchQuery.isLoading) {
    return (
      <div className='flex justify-center'>
        <p className='text-lg'>Loading.....</p>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {
          products?.map((product: Product) => (
            <li key={product.id} className='flex justify-center my-3'>
              <div className='flex flex-col w-3/6 self-start py-2 border-b-2  border-b-gray-200'>
                <p>
                  <label className='font-bold'>Title :</label> {product.title}
                </p>
                <p>
                  <label className='font-bold'>Description :</label> {product.description}
                </p>
                <p>
                  <label className='font-bold'>Price :</label> {product.price}
                </p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default ShowUsers;