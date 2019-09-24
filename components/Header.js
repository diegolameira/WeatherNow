import React from "react";
import styled from "styled-components";

export default ({ children }) => <Header>{children}</Header>;

const Header = styled.header`
  background: #fff;
  padding: 10px;

  img {
    height: 24px;
  }
`;
