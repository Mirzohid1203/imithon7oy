import { Form, ButtonToolbar, Button, Input, Textarea } from 'rsuite';
import { useState } from 'react';

const FormField = ({ name, label, accepter, ...props }) => (
  <Form.Group controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control name={name} accepter={accepter} {...props} />
  </Form.Group>
);

function CreateProduct() {
  const [formValue, setFormValue] = useState({
    title: '',
    description: '',
    price: ''
  });

  const submitHandler = () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.push({
      id: Date.now(),
      title: formValue.title,
      description: formValue.description,
      price: formValue.price
    });

    localStorage.setItem('products', JSON.stringify(products));

    setFormValue({
      title: '',
      description: '',
      price: ''
    });
  };

  return (
    <Form className='w-full p-5' fluid formValue={formValue} onChange={setFormValue}>
      <FormField name="title" label="Title" accepter={Input} />
      <FormField className='w-full' name="description" label="Description" accepter={Textarea} />
      <FormField name="price" label="Price" accepter={Input} />

      <ButtonToolbar>
        <Button color="green" appearance="primary" onClick={submitHandler}>
          PRODUCT QO'SHISH
        </Button>
      </ButtonToolbar>
    </Form>
  );
}

export default CreateProduct;