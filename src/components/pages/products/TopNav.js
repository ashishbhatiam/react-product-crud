import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {
    Icon,
    Menu,
    Button,
  } from "semantic-ui-react";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Menu
          attached="top"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <Menu.Menu position="left" style={{ display: "flex", alignItems: "center",}}>
            <Icon name="product hunt" size="huge" />
            <h3 style={{ paddingLeft: "10px", fontWeight: 'bold'}}>ProductZilla</h3>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Link to="/product/add">
              <Button animated color="green">
                <Button.Content visible>Add Product</Button.Content>
                <Button.Content hidden>
                  <Icon name="add" />
                </Button.Content>
              </Button>
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default TopNav;
