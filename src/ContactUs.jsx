import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const cardStyle = { backgroundColor: 'rgba(211, 211, 211, 0.6)', maxWidth: '700px', margin: '0 auto' };

const ContactUs = () => {
  const email = "filmvisarnanodemailer@gmail.com";
  const phoneNumber = "123-456-7890";

  return (
    <Container className="mt-5">
      <Card style={cardStyle}>
        <Card.Body>
          <h1>Kontakta oss</h1>
          <p>Behöver du hjälp eller har några frågor? Kontakta oss gärna:</p>
          <ul>
            <li>E-post: {email}</li>
            <li>Telefon: {phoneNumber}</li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactUs;