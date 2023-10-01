import './Footer.css';
import { Container, Row, Button, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container className='container-fluid fixed-bottom'>
                  
            <hr></hr>
            <Row>
                <Col className='tradeMarkFooter m-2'><div><Button>Boka</Button></div> </Col>
                <Col className='tradeMarkFooter m-2'><div><Button>Kontakta oss</Button></div></Col>
            </Row>
            <Row className='tradeMarkFooter'><img src="../public/logo.png" className='logoSize mx-auto d-block'></img></Row>
            <Row className='tradeMarkFooter'>
                <p>Made by: Team 3 - Elia, Habib, Hampus, Tanya, Artur, Simon & Bobby</p>
            </Row>
        </Container>
    );
}