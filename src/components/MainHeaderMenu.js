import React, { Component } from 'react'
import { Input, Header, Menu } from 'semantic-ui-react'
import TextContainer from './TextContainer';

export default class MainHeaderMenu extends Component {

  render() {

    return (
        <Menu pointing secondary>
            
            <Menu.Item>
              <TextContainer>
                <Header color='teal' as='h1'>Fluent Workout Logger</Header>
              </TextContainer>
            </Menu.Item>

      </Menu>
    )
  }
};