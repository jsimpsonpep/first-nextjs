import React, {useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filteredProducts = props.products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      
      {/* short circuiting  using a boolean to contol display of clear button */}
      {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

      {/* Map function to move all elements form on array into another array. */}
      {/* Filter function returns a true of false for each element of the array. */}

    <ul>
     {filteredProducts.map((product) => {
      return <li key={product}>{product}</li>
     })}
    </ul>

    </div>
  );
};

export default SearchBar;