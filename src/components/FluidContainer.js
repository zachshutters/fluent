import React from 'react';
import { Container } from 'semantic-ui-react'

const FluidContainer = ({ children }) => (
    <Container fluid>
      {children}
    </Container>
);

export default FluidContainer;