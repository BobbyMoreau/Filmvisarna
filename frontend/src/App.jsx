// Only import your sass in App (not every component)
import "./sass/main.scss";
import BioSeats from './BioSeatsComponents/BioSeats'

// Import some Bootstrap components
import MainMenu from './MainMenu';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function App() {
    return <>
        <header></header>
        <main>
            <MainMenu />
            <Container className="mt-5">
                <Row>
                    <Col>

                        <h1>Hello!</h1>
                        <BioSeats />
                        <p>There you are...</p>

                    </Col>
                </Row>
            </Container>
        </main>
        <footer></footer>
   
  </>;
}