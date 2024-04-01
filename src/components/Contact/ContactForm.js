import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Col, Container, Row } from 'react-bootstrap';

function ContactForm() {
  const [state, handleSubmit] = useForm("mgegnpkb");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  if (state.succeeded) {
    return <h2 className="purple">Thanks for your message!</h2>;
  }

  return (
    <Container>
      <Col>
        <form onSubmit={handleSubmit} method='POST'>
          <Row style={{ marginBottom: "15px" }}>
            <input
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
              autoComplete="name"
              placeholder='Full Name'
              id="name"
              type="text"
              name="name"
              maxLength={30}
              minLength={2}
              required={true}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <input
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
              autoComplete="email"
              placeholder='Email Address'
              id="email"
              type="email"
              name="email"
              required={true}
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <input
              value={subject}
              onChange={(e) => handleInputChange(e, setSubject)}
              placeholder='Subject'
              id="subject"
              name="subject"
                required={false}
                maxLength={30}
            />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <textarea
              value={message}
              onChange={(e) => handleInputChange(e, setMessage)}
              placeholder='Message'
              id="message"
              name="message"
              required={true}
              minLength={10}
              maxLength={500}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </Row>
          <Row>
            <button type="submit" disabled={state.submitting} className='btn-primary'>
              Submit
            </button>
          </Row>
        </form>
      </Col>
    </Container>
  );
}

export default ContactForm;