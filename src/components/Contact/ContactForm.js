import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Col, Container, Row } from 'react-bootstrap';
function ContactForm() {
  const [state, handleSubmit] = useForm("mgegnpkb");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <Container>
        <Col>
      <form onSubmit={handleSubmit}>
        <Row>
      <label htmlFor="name">
        Full Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        />
      <ValidationError
        prefix="Name" 
        field="name"
        errors={state.errors}
        />
      </Row>
      {""}
      <Row>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
        </Row>
        <Row>
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
        </Row>
    </form>
</Col>
    </Container>
  );
}
function App() {
  return (
    <ContactForm />
    );
}
export default App;