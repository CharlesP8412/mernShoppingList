import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ShoppingList = (props) => {
  const [itemState, setState] = useState(props.item);

  useEffect(() => {
    setState(props.getItems());
  }, []);

  const { items } = props.item;

  const onDelete = (id) => {
    props.deleteItem(id);
  };

  const parsedItems =
    items &&
    items.map(({ id, name }) => (
      <CSSTransition key={id} timeout={500} classNames='fade'>
        <ListGroupItem>
          <Button className='remove-btn' color='danger' size='sm' onClick={onDelete.bind(this, id)}>
            &times;
          </Button>
          {name}
        </ListGroupItem>
      </CSSTransition>
    ));

  return (
    <div>
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
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
