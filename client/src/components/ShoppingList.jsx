import React, { useEffect } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ShoppingList = (props) => {
  useEffect(() => {
    props.getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = (id) => {
    props.deleteItem(id);
  };

  const { items } = props.item;

  const parsedItems =
    items &&
    items.map(({ _id, name }) => (
      <CSSTransition key={_id} timeout={500} classNames='fade'>
        <ListGroupItem>
          <Button className='remove-btn' color='danger' size='sm' onClick={onDelete.bind(this, _id)}>
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
