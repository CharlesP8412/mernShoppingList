import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

const ItemModal = (props) => {
  const [form, setForm] = useState();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    setForm({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: form.name,
    };

    props.addItem(newItem);
    toggle();
  };

  return (
    <div>
      <Button color='dark' style={{ margin: '1rem' }} onClick={toggle}>
        Add Item
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Item to List</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='item'>Item to add: </Label>
              <Input type='text' name='name' id='item' placeholder='Enter Item...' onChange={handleChange}></Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='dark' block onClick={handleSubmit}>
            Add Item
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
