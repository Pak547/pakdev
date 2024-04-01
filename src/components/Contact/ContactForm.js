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
          <Row style={{ marginBottom: "15px" }}>
            <input
              placeholder='Full Name'
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
          <Row style={{ marginBottom: "15px" }}>
            <input
              placeholder='Email Address'
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
          <Row style={{ marginBottom: "15px" }}>
            <input
              placeholder='Subject'
              id="subject"
              name="subject"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </Row>
            <Row style={{ marginBottom: "15px" }}>
              <textarea
                placeholder='Message'
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </Row>
          <Row>
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