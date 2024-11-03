import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from '../styles/Store.module.css';
// import styles from "../components/SearchBar/SearchBar.module.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Button from "../components/Button/Button";


export default function Store() {
  
  // Create a piece of state called the product state that is empty initially.
  const [productsState, setProductsState] = useState([]);

  // Run useEffect when the componenet mounts: After 2000 ms execute the code
  // to simulate the time it might take to get data from an external source
  useEffect(() => {

    fetch('https://fakestoreapi.com/products/')
      .then(res=>res.json())
      .then(productsArray=> {
        const newProductsState = productsArray.map((product) => {
          return product.title;
        });
        setProductsState(newProductsState);

      })
  }, []);

  const hasProducts = productsState.length > 0;

  return (
    <>
    <div className={styles.Storefakestore}>
      <h1>Fake Store</h1>
      <p>Welcome to the Fake Store</p>
      <p>Herer you'll find a variety of products from the fakestore API.</p>

      <Button>Hello World</Button>

      {/* Conditional rendering to handle UI while products are loading */}
      {hasProducts ? <SearchBar products = {productsState} /> : "Loading..."}

    </div>

    </>
  );
}