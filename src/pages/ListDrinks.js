import React, { useState, useEffect } from 'react';

// Hooks
import useDrink from '../hooks/useDrink.hook';

// Styles
import './style.css';

// List of drinks

const API_DRINK_URL =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const ListDrinks = () => {
  const { drinks, getData, isLoading } = useDrink();

  useEffect(() => {
    getData();
  }, []);

  console.log(drinks);

  return (
    <section>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        drinks &&
        drinks.map((drink, i) => (
          <div key={i} className="container">
            <h2>Name</h2>
            <p>{drink.strDrink}</p>
            <h2>Gass</h2>
            <p>{drink.strGlass}</p>
            <h2>Category</h2>
            <p>{drink.strCategory}</p>
          </div>
        ))}
    </section>
  );
};

export default ListDrinks;
