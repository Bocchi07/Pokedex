import React from 'react';

const ItemList = ({ items, onItemClick }) => {
  return (
    <ul className="z-20">
      {items.map((item, index) => (
        <li key={index} onClick={() => onItemClick(item)}>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
