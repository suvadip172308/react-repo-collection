import { useEffect, useState } from "react";
import Item from './Item';
import { useNavigate } from "react-router-dom";
import style from './ItemList.module.css';
import Search from "./Search";

const ItemList = () => {
  const [items, setItems ] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      const products = json.products;

      console.log('/// JSON ///', products.length);
      
      setItems(() => [...json.products]);
    };

    fetchProducts();
  }, []);

  const handleItemClick = (id) => {
    console.log('Item Id ', id);
    navigate(`/product/${id}`);
  }

  const onSearch = (searchText) => {
    fetch(`https://dummyjson.com/productscccc/search?q=${searchText}`)
    .then(res => res.json())
    .then((res) => {
      const searchedProducts = res.products;
      setItems(searchedProducts);
    })
    .catch(() => {
      console.log('ERROR OCCURED');
    });
  }

  return(
    <div>
      <h1> Product List </h1>
      <div>
        <Search search={(text) => onSearch(text)}/>
      </div>
      <ul className={style.listStyle}>
      {
        items?.map((item) =>
          <li key={item.id}>
            <Item
              item={item}
              itemClick={handleItemClick}
            />
          </li>
        )
      }
      </ul>
    </div>
  )
}

export default ItemList;