import React, { Component } from "react";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.primary || "red"};
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
export default class AboutPage extends Component {
  render() {
    return (
      <Wrapper>
        <Title primary="blue">Hello World!</Title>
      </Wrapper>
    );
  }
}
