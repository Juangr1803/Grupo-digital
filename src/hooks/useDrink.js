import React, { useState, useEffect } from 'react';

const API_DRINK_URL =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const useDrink = async () => {
  try {
    const res = await fetch(API_DRINK_URL);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export default useDrink;
