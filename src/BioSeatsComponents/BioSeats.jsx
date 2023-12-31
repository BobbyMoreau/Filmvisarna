import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import '../sass/BioSeats.css';
import FinalizeBooking from "../FinalizeBooking.jsx";

function BioSeats({ sum, bookings, selectedMovieTitle, selectedScreeningTime, auditoriumId, screeningDatetime, price, ticketTypes, chosenSeats, setChosenSeats, screeningId }) {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatsData, setSeatsData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setChosenSeats(selectedSeats);
    }, [selectedSeats]);

    useEffect(() => {
        fetch('/api/seats')
            .then(response => response.json())
            .then(data => setSeatsData(data))
            .catch(error => console.error(error));
    }, []);
    const isSeatBooked = (seat) => {
        return bookings.some(booking => {
            return booking.movieTitle === selectedMovieTitle &&
                booking.screeningTime === selectedScreeningTime &&
                booking.seatNumbers.split(',').includes(String(seat.id));
        });
    };

    const handleSeatSelection = (seatId) => {
        setSelectedSeats((prevSeats) => {
            if (prevSeats.includes(seatId)) {
                return prevSeats.filter((id) => id !== seatId);
            } else if (prevSeats.length < sum) {
                return [...prevSeats, seatId];
            } else {
                alert("Du kan inte boka fler platser än antalet valda biljetter!");
                return prevSeats;
            }
        });
    };

    useEffect(() => {
        if (selectedSeats.length > sum) {
            setSelectedSeats(prevSeats => prevSeats.slice(0, sum));
        }
    }, [sum]);

    const seatsForCurrentAuditorium = seatsData.filter(seat => seat.auditorium_id === auditoriumId);

    const renderSeats = () => {

        const groupedSeats = seatsForCurrentAuditorium.reduce((acc, seat) => {
            (acc[seat.rowNumber] || (acc[seat.rowNumber] = [])).push(seat);
            return acc;
        }, {});


        return Object.keys(groupedSeats).map(rowNumber => (
            <Row key={rowNumber} className="mb-2 center-seats flex-row">
                {groupedSeats[rowNumber].map(seat => (
                    <Col key={seat.id} xs="auto" className="text-center seat-col">
                        <Button
                            variant={selectedSeats.includes(seat.id) ? "primary" : isSeatBooked(seat) ? "dark" : "secondary"}
                            onClick={() => !isSeatBooked(seat) && handleSeatSelection(seat.id)}
                            className={`seat-btn ${selectedSeats.includes(seat.id) ? "seat-button-primary" : "seat-button-secondary"}`}
                            disabled={isSeatBooked(seat)} // Inaktivera knappen om sätet är bokat
                        >
                        </Button>
                    </Col>
                ))}
            </Row>
        ));
    };

    return (
        <Container className="saloon-container mt-5">
            <FinalizeBooking {...{
                selectedMovieTitle,
                screeningDatetime,
                showModal,
                setShowModal,
                price,
                ticketTypes,
                chosenSeats,
                seatsForCurrentAuditorium,
                screeningId
            }} />

            <div className="screen mb-5"></div>
            {renderSeats()}
            <Row className="mt-3 justify-content-center">
                <Col xs="auto">
                    <Button
                        onClick={() => setShowModal(true)}
                        disabled={selectedSeats.length !== sum || sum === 0}>Fortsätt bokningen</Button>

                </Col>
            </Row>
        </Container>
    );
}

export default BioSeats;
