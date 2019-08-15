import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

export default class MainSideMenu extends Component {
  state = { activeItem: 'exercises' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu vertical secondary pointing>
            <Menu.Header>Latest</Menu.Header>
            <Menu.Menu>
                <Menu.Item>
                    Blog
                </Menu.Item>
            </Menu.Menu>

            <Menu.Header>Projects</Menu.Header>
            <Menu.Menu>
                <Menu.Item>
                    Workout Logger
                </Menu.Item>
            </Menu.Menu>

            <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick}>
                csv
            </Menu.Item>
      </Menu>
    )
  }
};