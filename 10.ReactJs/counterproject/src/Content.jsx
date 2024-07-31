// src/Content.jsx
import React from "react";
import styled from "styled-components";
import Counter from "./counter";

const ContentContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  animation: ${(props) => props.glow} 2s infinite alternate;
  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
`;

const Content = () => {
  return (
    <ContentContainer>
      <Title>Welcome to My React App</Title>
      <Paragraph>
        This is a simple React application showcasing various features such as a
        counter, theme toggling, and more. Explore the features and enjoy the
        animations!
      </Paragraph>
      <CardContainer>
        <Card>
          <Counter />
        </Card>
        <Card>
          <h2>Another Card</h2>
          <p>This card can have additional content or features.</p>
        </Card>
        <Card>
          <h2>One More Card</h2>
          <p>Feel free to add more cards with different content and styles.</p>
        </Card>
      </CardContainer>
    </ContentContainer>
  );
};

export default Content;
