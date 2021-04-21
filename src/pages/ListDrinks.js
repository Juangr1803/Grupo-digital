import React from 'react';

import useDrink from '../hooks/useDrink';

const ListDrinks = () => {
  const drinks = useDrink();

  return (
    <section>
      <h1>Dinks</h1>
    </section>
  );
};

export default ListDrinks;
