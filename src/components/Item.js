import { React, useState } from 'react';

function Item({ name, category }) {
  const [itemState, setItemState] = useState(false);
  const handleClick = () => {
    setItemState((itemState) => !itemState);
  };
  return (
    <li className={!itemState ? '""' : 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {!itemState ? 'Add to Cart' : 'Remove From Cart'}
      </button>
    </li>
  );
}

export default Item;
