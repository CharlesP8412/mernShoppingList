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

  const parsedItems =
    items &&
    items.map(({ id, name }) => (
      <CSSTransition key={id} timeout={500} classNames='fade'>
        <ListGroupItem>
          <Button
            className='remove-btn'
            color='danger'
            size='sm'
            onClick={() =>
              setState((prev) => ({
                items: state.items.filter((item) => item.id !== id),
              }))
            }
          >
            &times;
          </Button>
          {name}
        </ListGroupItem>
      </CSSTransition>
    ));
  const deleteItem = () => {};

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
      <ListGroup>
        <TransitionGroup className='shopping-list'>{parsedItems}</TransitionGroup>
      </ListGroup>
    </div>
  );
};

export default ShoppingList;
