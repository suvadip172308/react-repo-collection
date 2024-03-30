import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export const fetchProductDetails = async ({request, params}) => {
  const itemId = params.id;

  const res = await fetch(`https://dummyjson.com/products/${itemId}`);
  const resData = await res.json();

  console.log(resData);

  return resData;
};

const ItemDetails = () => {
  const [itemDetails, setItemDetails] = useState({});
  //const params = useParams();
  const productDeatils = useLoaderData();

  // const itemId = params.id ?? '';
  
  // console.log(params.id);

  // useEffect(() => {
  //   const fetchItemDetails = async (itemId) => {
  //     const res = await fetch(`https://dummyjson.com/products/${itemId}`);
  //     const resData = await res.json();

  //     setItemDetails(resData);
  //   };

  //   fetchItemDetails(itemId);
  // }, [itemId])

  useEffect(() => {
    setItemDetails(productDeatils);
  }, [])

  return (
    <div>
      <h1> Item Deatils</h1>
      <h3>{itemDetails.title}</h3>
      <p>Brand: {itemDetails.brand}</p>
      <p>Category: {itemDetails.category}</p>
      <div>
        {
          itemDetails?.images?.map((img, index) => {
            return <img key={index} src={img} alt='product' style={{height: '200px', width: '200px'}}/>
          })
        }
      </div>
      <p>{itemDetails.description}</p>
      <p>Rating: {itemDetails.rating}</p>
      <p>In Stock: {itemDetails.stock}</p>
      <p>Discount: {itemDetails.discountPercentage}%</p>
      <p>Price: {itemDetails.price}%</p>
    </div>
  )
}

export default ItemDetails;