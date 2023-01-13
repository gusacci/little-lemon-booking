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
const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  background-color: #fff;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 5px;
`;
const Rating = styled.div`
  padding-top: 5px;
  font-family: "Markazi Text", serif;
  font-size: 16pt;
`;
const PhotoContainer = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
`;
const Photo = styled.img`
  width: 100%;
`;
const Name = styled.h6`
  font-size: 12pt;
  padding: 0;
  margin: 0;
`;
const ReviewText = styled.p`
  font-size: 12pt;
  padding: 0;
`;

const Testimonials = () => {
  return (
    <Container>
      <Title>Testimonials</Title>
      <CardsContainer>
        <Card>
          <Rating>⭐️⭐️⭐️⭐️</Rating>
          <PhotoContainer>
            <Photo src="https://i.pinimg.com/564x/05/0a/51/050a511d3d5a5ba0d66aec2a8e7e9ad0.jpg" />
          </PhotoContainer>

          <Name>Vanessa</Name>
          <ReviewText>
            One of the better dining experiences I've had.
          </ReviewText>
        </Card>

        <Card>
          <Rating>⭐️⭐️⭐️⭐️⭐️</Rating>
          <PhotoContainer>
            <Photo src="https://i.pinimg.com/564x/17/72/b8/1772b8d785e60a3ec6b77424d2c8da54.jpg" />
          </PhotoContainer>

          <Name>Jakob</Name>
          <ReviewText>
            The restaurant had a nice decoration and mood.
          </ReviewText>
        </Card>

        <Card>
          <Rating>⭐️⭐️⭐️⭐️⭐️</Rating>
          <PhotoContainer>
            <Photo src="https://i.pinimg.com/564x/cc/9e/99/cc9e995c84c593b5cd0ca9ea413c2cc5.jpg" />
          </PhotoContainer>

          <Name>Alex</Name>
          <ReviewText>Super cute place for luch and dinner.</ReviewText>
        </Card>

        <Card>
          <Rating>⭐️⭐️⭐️⭐️</Rating>
          <PhotoContainer>
            <Photo src="https://i.pinimg.com/564x/6b/1f/51/6b1f514c91ef7c5b031662c100ce29d8.jpg" />
          </PhotoContainer>

          <Name>Emma</Name>
          <ReviewText>Food is delicious and great service.</ReviewText>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Testimonials;
