import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ShoppingList = (props) => {
  const [itemState, setState] = useState({});

  // useEffect(() => {
  //   setState(props.getItems());
  // }, []);

  const { items } = props.item;

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
                items: itemState.items.filter((item) => item.id !== id),
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
            setState((prev) => ({ items: [...itemState.items, { id: uuidv4(), name }] }));
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

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});
export default connect(mapStateToProps, { getItems })(ShoppingList);
