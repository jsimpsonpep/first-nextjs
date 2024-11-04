'use client';
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import styles from  '../components/SearchBar/SearchBar.module.css';

 export default function Store() {
  
  // Create an array as a piece of state that will be used to store a list of products
  // from the fakestore API. Set the array as empty initially.
  const [productsState, setProductsState] = useState([]);

  // Run useEffect when the component mounts. Fetch the product JSON and save it 
  // into productsState.
  useEffect(() => {

    fetch('https://fakestoreapi.com/products/')
      // the response object contains metadate concerning the request, but it needs
      // to be parsed to get to the data that was requested.
      .then(res=>res.json())

      // In this step we are parsing the requested data and updating the state we
      // created with the it. In our case, we are creating an array of objects.
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return (
            {
              "title": product.title,
              "price": product.price,
              "imgage": product.image,
            }
          )});
          setProductsState(productsArray)
        })
      }, []);

  const hasProducts = productsState.length > 0;

  return (
    <>
      <main className={styles.StoreFakestore}>
        <h1>Fake Store</h1>
        <p>Welcome to the Fake Store!</p>
        <p>Here you&apos;ll find a variety of products from the fackstore API.</p>
        <p>The Search Bar!</p>

        {/* Conditional rendering to handle UI while products are loading */}
        {hasProducts ? <SearchBar products = {productsState} /> : "Loading..."}
      
      </main>
    </>
  );
}