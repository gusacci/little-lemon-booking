import React from "react";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BookingPage = () => {
  return (
    <div>
      <Navbar />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default BookingPage;
