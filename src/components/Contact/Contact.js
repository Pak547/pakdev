import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import ContactForm from "./ContactForm";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact <strong className="purple">Me</strong>
            </h1>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;