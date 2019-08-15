import React from 'react';
import { Container } from 'semantic-ui-react'

const PageContainer = ({ children }) => (
    <Container>
      {children}
    </Container>
);

export default PageContainer;