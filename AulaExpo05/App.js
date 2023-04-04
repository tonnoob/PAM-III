import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  borderColor: gray;
  align-itens: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: black;
  text align: center;
  font-size: 10px;
`;

export default () => (
  <Container>
    <Title> Login </Title>
  </Container>
);

