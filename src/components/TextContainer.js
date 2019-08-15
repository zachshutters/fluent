import React from 'react';
import { Container } from 'semantic-ui-react'

const TextContainer = (props) => (
    <Container textAlign={props.textAlignment}>
      {props.children}
    </Container>
);

TextContainer.defaultProps = {
  textAlignment: 'center'
};

export default TextContainer;