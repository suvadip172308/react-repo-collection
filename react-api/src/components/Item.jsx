import styles from './Item.module.css';

const Item = ({ item, itemClick }) => {
  return(
    <div
      className={ styles.card }
      onClick={() => itemClick(item.id)}
    >
      <h4>Title: {item.title}</h4>
      <div>
        <div className={styles['wrapper-description']}>
          <p>Description: { item.description }</p>
          <p>Price: { item.price }</p>
        </div>
        <div>
          <img src={item.thumbnail} style={{height: '200px', width: '200px'}} alt='product'/>
        </div>
      </div>
    </div>
  );
}

export default Item;