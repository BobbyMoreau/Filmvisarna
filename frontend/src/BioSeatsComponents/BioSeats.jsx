import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BioSeats.css';

function BioSeats() {
    // Initialisera alla s�ten som obokade (false)
    const initialSeats = Array(7).fill(null).map(() => Array(7).fill(false));

    // State f�r alla s�ten
    const [seats, setSeats] = useState(initialSeats);

    // Hantera klick p� ett s�te
    const handleSeatClick = (i, j) => {
        // Skapa en kopia av nuvarande s�ten
        const newSeats = seats.map(row => row.slice());
        
        // V�xla bokningsstatus f�r det klickade s�tet
        newSeats[i][j] = !newSeats[i][j];
        
        // Uppdatera state med de nya s�tena
        setSeats(newSeats);
    };

    return (
        <Container>
            {seats.map((row, i) => (
                <Row key={i} className="no-gutters">
                    {row.map((seat, j) => (
                        <Col key={j} xs={1}>
                            <div 
                                className={`seat ${seat ? 'booked' : ''}`}
                                onClick={() => handleSeatClick(i, j)}
                            ></div>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}

export default BioSeats;
