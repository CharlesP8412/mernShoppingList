import React, { useState } from 'react';

import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { v4 as uuidv4 } from 'uuid';

const ShoppingList = (props) => {
  const [state, setState] = useState({
    items: [
      { id: uuidv4(), name: 'Eggs' },
      { id: uuidv4(), name: 'Steak' },
      { id: uuidv4(), name: 'Milk' },
      { id: uuidv4(), name: 'Water' },
    ],
  });
  const { items } = state;

  // const name = () => {
  //   prompt('Enter Item22');
  //   if (name) {
  //     setState((prev) => ({ items: [...state.items, { id: uuidv4(), name }] }));
  //   }
  // };

  return (
    <div>
      <Button
        color='dark'
        style={{ marginBottom: '2rem' }}
        onClick={() => {
          const name = prompt('Enter Item');
          if (name) {
            setState((prev) => ({ items: [...state.items, { id: uuidv4(), name }] }));
          }
        }}
      >
        Add Item
      </Button>
    </div>
  );
};

export default ShoppingList;
