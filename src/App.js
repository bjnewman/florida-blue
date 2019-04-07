import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tab, Row, Col from 'react-bootstrap';
import ArtistList from './artist_list.js';
import ArtistDetail from '.artist_detail.js';



class App extends Component {
  render() {
    return (
      <Tab.Container id="list-group-tabs" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ArtistList />
          </Col>
          <Col sm={8}>
            <ArtistDetail />
          </Col>
        </Row>
      </Tab.Container>;
    );
  }
}

export default App;
