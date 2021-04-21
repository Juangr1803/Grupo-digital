import React, { useState, useEffect } from 'react';

const API_DRINK_URL =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const useDrink = () => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    fetch(API_DRINK_URL)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setDrinks(data.drinks);
      })
      .catch((error) => console.log(error));
  };

  return { getData, drinks, isLoading };
};

export default useDrink;
