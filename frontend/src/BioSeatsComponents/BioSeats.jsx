import React, { useState, useEffect, useMemo } from "react";
import auditoriumsData from "./SeatsData.js";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./BioSeats.css";
import ticketsData from './Tickets.js';
import { Link } from 'react-router-dom';

function BioSeats() {
    // State f�r att h�lla reda p� bokade platser, valda platser och auditorium ID
    const [bookedTickets, setBookedTickets] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [auditoriumId, setAuditoriumId] = useState(1);

    // Ber�knar totalt antal biljetter med useMemo f�r att undvika on�diga ber�kningar
    const totalTickets = useMemo(() =>
        ticketsData.kids + ticketsData.adults + ticketsData.elderly
        , []);

    // useEffect som s�tter manuellt bokade platser n�r komponenten monteras
    useEffect(() => {
        setBookedTickets([1, 2, 3, 15, 16, 44, 45, 23, 61, 72, 71, 77, 78]);
    }, []);


    const handleSeatSelection = (seatId) => {
        setSelectedSeats(prev =>
            selectedSeats.includes(seatId)
                ? prev.filter(id => id !== seatId) // Om platsen redan �r vald, avmarkera den
                : (selectedSeats.length < totalTickets) ? [...prev, seatId] : prev // Annars, markera den om gr�nsen inte �r n�dd
        );
    };


    const renderSeats = () => {
        // Filtrera ut platserna f�r det aktuella auditoriet
        const seatsForCurrentAuditorium = auditoriumsData.filter(seat => seat.auditoriumId === auditoriumId);

        // Gruppera platserna per rad
        const groupedSeats = seatsForCurrentAuditorium.reduce((acc, seat) => {
            (acc[seat.rowNumber] || (acc[seat.rowNumber] = [])).push(seat);
            return acc;
        }, {});

        // Sortera platserna per rad
        for (let row in groupedSeats) {
            groupedSeats[row].sort((a, b) => a.seatNumber - b.seatNumber);
        }

        // Rendera platserna som knappar
        return Object.keys(groupedSeats).map(rowNumber => (
            <Row key={rowNumber} className="mb-2 center-seats flex-row">
                {groupedSeats[rowNumber].map(seat => (
                    <Col key={seat.id} xs="auto" className="text-center seat-col">
                        <Button
                            variant={selectedSeats.includes(seat.id) ? "primary" : "secondary"}
                            disabled={bookedTickets.includes(seat.id)}
                            onClick={() => handleSeatSelection(seat.id)}
                            className="seat-btn"
                        >
                            {seat.seatNumber}
                        </Button>
                    </Col>
                ))}
            </Row>
        ));
    };

    // Rendera screen och knappar 
    return (
        <Container className="saloon-container mt-5">
            <div className="screen mb-5">Screen</div>
            {renderSeats()}
            <Row className="mt-3 justify-content-center">
                <Col xs="auto">
                    <Button onClick={() => setAuditoriumId(auditoriumId === 1 ? 2 : 1)}>Toggle Auditorium</Button>
                </Col>
                <Col xs="auto">
                    <Link to="/Finalize-booking">
                        <Button>{'Forts' + String.fromCharCode(228) + 'tt Bokningen'}</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default BioSeats;
