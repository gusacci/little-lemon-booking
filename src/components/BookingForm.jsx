import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  font-family: "Karla", sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14pt;
`;
const Wrapper = styled.div`
  background-color: #f4ce14;
  padding: 20px;
  border-radius: 16px;
  width: 40%;
`;
const Title = styled.h1`
  color: #495e57;
  font-family: "Markazi Text", serif;
  text-align: center;
  font-size: 40pt;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  line-height: 20px;
`;
const Input = styled.input`
  border: none;
  padding: 10px;
  border-radius: 3px;
`;
const Select = styled.select`
  border: none;
  padding: 10px;
  border-radius: 3px;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #495e57;
  border: none;
  border-radius: 6px;
  color: #edefee;
  cursor: pointer;
  font-size: 14pt;
`;

const BookingForm = (props) => {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  const handleDateChange = (e) => {
    setBookingDate(e.target.value);
    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  };

  const clearForm = () => {
    setName("");
    setBookingDate("");
    setBookingTime("");
    setNumberOfGuests("");
    setOccasion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your reservation! See you at Little Lemon.");
    clearForm();
  };

  return (
    <Container>
      <Wrapper>
        <Title> Reserve a table</Title>
        <Form onSubmit={handleSubmit}>
          {" "}
          <Label htmlFor="name">Your name</Label>
          <Input
            type="text"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            minLength={2}
            maxLength={50}
          />
          <Label htmlFor="phoneNum">Phone Number</Label>
          <Input
            type="tel"
            id="phoneNum"
            placeholder="(xxx)-xxx-xxxx"
            value={phoneNumber}
            required
            minLength={10}
            maxLength={11}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Label htmlFor="res-date">Choose date</Label>
          <Input
            type="date"
            id="res-date"
            value={bookingDate}
            required
            onChange={handleDateChange}
          />
          <Label htmlFor="res-time">Choose time</Label>
          <Select
            id="res-time"
            value={bookingTime}
            onChange={(e) => {
              setBookingTime(e.target.value);
            }}
            required
          >
            <option value="select">Select time</option>
            {finalTime}
          </Select>
          <Label htmlFor="guests">Number of guests</Label>
          <Input
            required
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numberOfGuests}
            onChange={(e) => {
              setNumberOfGuests(e.target.value);
            }}
          />
          <Label htmlFor="occasion">Occasion</Label>
          <Select
            id="occasion"
            value={occasion}
            onChange={(e) => {
              setOccasion(e.target.value);
            }}
          >
            <option value="selecto">Select occasion</option>

            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </Select>
          <Button type="submit">Make Your Reservation</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default BookingForm;
