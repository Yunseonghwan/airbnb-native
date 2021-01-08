import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const PriceText = styled.Text`
  font-size: 16px;
`;

const PriceNumber = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const SuperHost = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const SuperHostText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
`;

const PhotosContainer = styled.View`
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
  height: ${height / 4}px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const RoomCard = ({ id, isFav, isSuperHost, photos, name, price }) => (
  <Container>
    <PhotosContainer>
      {photos.length === 0 ? (
        <SlideImage
          resizeMode="repeat"
          source={require("../assets/roomDefault.jpeg")}
        />
      ) : (
        <Swiper
          paginationStyle={{ marginBottom: -15 }}
          dotColor={"rgba(200, 200, 200, 0.8)"}
          activeDotColor={"white"}
        >
          {photos.map((photo) => (
            <SlideImage key={photo.id} source={{ uri: photo.file }} />
          ))}
        </Swiper>
      )}
    </PhotosContainer>
    {isSuperHost ? (
      <SuperHost>
        <SuperHostText>Superhost</SuperHostText>
      </SuperHost>
    ) : null}
    <Name>{name}</Name>
    <PriceContainer>
      <PriceNumber>{price}</PriceNumber>
      <PriceText> / night</PriceText>
    </PriceContainer>
  </Container>
);

RoomCard.propTypes = {
  id: Pt.number.isRequired,
  isFav: Pt.bool.isRequired,
  isSuperHost: Pt.bool.isRequired,
  photos: Pt.arrayOf(Pt.shape({ file: Pt.string.isRequired })),
  name: Pt.string.isRequired,
  price: Pt.number.isRequired,
};

export default RoomCard;
