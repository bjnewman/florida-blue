import React, { Component } from 'react';
import ListGroup from 'react-bootstrap';

function ArtistDetail() {
	return <ListGroup>
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2
              </ListGroup.Item>
            </ListGroup>
}

export default ArtistDetail;
