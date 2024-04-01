import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from "react-bootstrap";


export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <Container>
      <Col>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
      <input type="text" placeholder="Name" {...register("name", {required: true, maxLength: 30})} />
      </Row>
      <Row>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      </Row>
      <Row>
      <textarea placeholder="Message" {...register("Message", {required: true,})} />
      </Row>
      <input type="submit" />
    </form>
      </Col>
    </Container>
  );
}