import styled from "styled-components";
import woman from "../images/woman.jpg";

const Container = styled.div`
  margin-top: 50px;
  font-family: "Karla", sans-serif;
  padding: 0px 150px 50px 150px;
  background-color: #f4ce14;
`;
const Title = styled.h2`
  font-family: "Markazi Text", serif;
  text-align: center;
  line-height: 40px;
  font-size: 24pt;
`;
const CardsContainer = styled.div``;
const Card = styled.div`
  background-color: #fff;
  width: 150px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;
const Rating = styled.div`
  line-height: 1.5;
  font-family: "Markazi Text", serif;
  font-size: 16pt;
`;
const PhotoContainer = styled.div``;
const Photo = styled.img`
  width: 80px;
  height: 80px;
`;
const Name = styled.div`
  font-size: 12pt;
`;
const ReviewText = styled.div`
  font-size: 12pt;
`;

const Testimonials = () => {
  return (
    <Container>
      <Title>Testimonials</Title>
      <CardsContainer>
        <Card>
          <Rating>Rating</Rating>
          <PhotoContainer>
            <Photo src={woman} />
          </PhotoContainer>

          <Name>Name</Name>
          <ReviewText>Review text</ReviewText>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Testimonials;
