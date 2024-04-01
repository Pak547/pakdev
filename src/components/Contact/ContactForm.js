import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Col, Container, Row } from 'react-bootstrap';

function ContactForm() {
  const [state, handleSubmit] = useForm("mgegnpkb");
  if (state.succeeded) {
    return <h2 className="purple" >Thanks for your message!</h2>;
  }
  return (
    <Container>
      <Col>
        <form onSubmit={handleSubmit} method='POST' action='https://formspree.io/f/mgegnpkb'>
          <Row style={{ marginBottom: "15px" }}>
            <input
              autocomplete="name"
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
              autocomplete="email"
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
            <button type="submit" disabled={state.submitting}
              className='btn-primary'>
              Submit
            </button>
          </Row>
        </form>
      </Col>
    </Container>
  );
}

export default ContactForm;