import React, { useReducer } from "react";
import { fetchAPI } from "../bookingsAPI";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BookingPage = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  return (
    <div>
      <Navbar />
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      <Footer />
    </div>
  );
};

export default BookingPage;
