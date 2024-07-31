// src/components/ImageCard.js
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const ImageCard = ({ image }) => {
  return (
    <Card>
      <Image src={image.url} alt={image.title} />
      <Title>{image.title}</Title>
    </Card>
  );
};

export default ImageCard;
