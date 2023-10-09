import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CounterButton from "./CounterButton";



//BEhöver lägga till så att den räknar ut pris
// Måste få ut totalpris

function ChooseAge() {

    const [sum, setSum] = useState(0);
    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [retired, setRetired] = useState(0);
    const [price, setPrice] = useState(0);
    
    useEffect(() => {
        setSum(adults + kids + retired);
    }, [adults, kids, retired]);

    useEffect(() => {
        setPrice((adults*140) + (kids*80) + (retired*120));
    }, [adults, kids, retired]);

    
    function updateAdultValue(newValue) {
        setAdults(newValue);
        
    }

    function updateKidsValue(newValue) {
        setKids(newValue);
        
    }

    function updateRetiredValue(newValue) {
        setRetired(newValue);
        
    }

    return (
        <>
             
            <Container className="col-lg-6 bg-secondary rounded p-3">
                <p className="text-center">Välj biljetter</p>
                <Row><Col>Vuxen 140kr:</Col><Col><CounterButton onUpdate={updateAdultValue} /></Col></Row>
                
                <hr />
                <Row><Col>Barn 80kr:</Col><Col><CounterButton onUpdate={updateKidsValue} /></Col></Row>
                <hr />
                <Row><Col>Pensionär 120kr:</Col><Col><CounterButton onUpdate={updateRetiredValue} /></Col></Row>
                <hr />
                <p>Du vill beställa {sum} biljetter. Pris: {price}kr</p>
            </Container>
            
        </>

    )
}

export default ChooseAge;