// src/Footer.jsx
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 10px 20px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.toggleBorder};
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} My React App. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
