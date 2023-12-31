import { useState, useEffect } from "react";

export default function BookingFetch({ user }) {

  const [bookings, setBookings] = useState([]);

  const {email: userEmail} = user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/bookingsNice/email/=/` + userEmail);
        const bookingsListed = await response.json();
        setBookings(bookingsListed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return bookings;
}
