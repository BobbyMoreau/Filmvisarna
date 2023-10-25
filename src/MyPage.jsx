import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Form } from 'react-bootstrap';
import {useNavigate, useOutletContext} from 'react-router-dom';


async function deleteFetch(url=""){
  const response = await fetch(url, {method: 'DELETE'});
  return response.json();
}

const MyPage = () => {

  const { setUser } = useOutletContext();
  const { user} = useOutletContext();

  const cardStyle = { backgroundColor: 'rgba(211, 211, 211, 0.6)', maxWidth: '600px', margin: '0 auto' };
  const navigate = useNavigate();

  const handleLogout = async () => {

    try {
    
      await deleteFetch('/api/login');
      setUser(null);
      navigate("/");

    } catch (error) {
      console.error('Logout failed:', error);
    }

  };

  // Replace this with your actual booked movies data
  const bookedMovies = [
    'Movie 1',
    'Movie 2',
    'Movie 3',
    // Add more movies as needed
  ];

  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center">
       <Card style={cardStyle}>
        <Card.Header className="text-center"><h2>Min Sida</h2></Card.Header> {/* Header for "My Page" */}
        <Card.Body className="text-center">
          <h2></h2>
          <div className="user-info">
            <table>
              <tbody>
                <tr>
                  <td><strong>Förnamn:</strong></td>
                  <td>{user.firstName}</td>
                </tr>
                <tr>
                  <td><strong>Efternamn:</strong></td>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <td><strong>E-post:</strong></td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td><strong>Telefonnummer:&nbsp;&nbsp;&nbsp;&nbsp;</strong></td>
                  <td>{user.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
                    <div className="booked-movies">
            <h4>Bokade filmer:</h4>
            <ul style={{ listStyleType: 'none' }}>
              {bookedMovies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        </Card.Body>
        <Card.Footer className="text-center">
        <Button variant="primary" onClick={handleLogout}>
            Logga ut
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
  
};

export default MyPage;