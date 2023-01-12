import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  font-family: "Karla", sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

const FormItem = styled.div``;
const Label = styled.label`
  line-height: 20px;
  font-size: 14pt;
`;
const Input = styled.input`
  border: none;
  padding: 10px;
`;
const Select = styled.select`
  border: none;
  padding: 10px;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #495e57;
  border: none;
  border-radius: 6px;
  color: #edefee;
  cursor: pointer;
`;

const BookingForm = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Book a table</Title>
        <Form>
          {" "}
          <Label htmlFor="res-date">Choose date</Label>
          <Input type="date" id="res-date" />
          <Label htmlFor="res-time">Choose time</Label>
          <Select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </Select>
          <Label htmlFor="guests">Number of guests</Label>
          <Input type="number" placeholder="1" min="1" max="10" id="guests" />
          <Label htmlFor="occasion">Occasion</Label>
          <Select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </Select>
          <Button type="submit">Make Your Reservation</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default BookingForm;
