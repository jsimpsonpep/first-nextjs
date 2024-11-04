'use client';
import React, { useState } from 'react';
import styles from './SearchBar.module.css';

// Create a piece of state for the serach bar value that is empty initially.
const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  // update the search bar value with new input as it is entered
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // reset the search bar state to empty when clear is selected
  const handleClearClick = () => {
    setSearchValue("");
  };

  // determine if the clear button should be displayed
  const shouldDisplayButton = searchValue.length > 0;

  // filter the product display based on the search bar value
  const filteredProducts = props.products.filter((product) => {
    return product.title.includes(searchValue) ||
           product.description.includes(searchValue);
  });

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
    
      {/* short circuiting  using a boolean to contol display of clear button */}
      {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

      {/* Map function to move all elements from one array into another array. */}
      {/* Filter function returns a true of false for each element of the array. */}

      {/* products and filtered results are displayed here. */}
      <div className={styles.container__prod}>
      {filteredProducts.map((product) => {
        return(
          <div key={product.id} className={styles.prod}>
            <p className={styles.prod__price}>${product.price}</p>
            <img className={styles.prod__image} src={product.image} alt={product.title}></img>
            <p className={styles.prod__title}>{product.title}</p>
          </div>
        )
      })
      }
      </div>
    </div>
  );
};


export default SearchBar;
