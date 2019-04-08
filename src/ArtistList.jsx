import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'

// usage: <ArtistList artists={this.state.artistsList} loading={this.state.loadingList} activeID={this.state.activeID} error={this.state.listError} className='col-sm-4'/>
// props: {artistList: an array of objects, isLoading: boolean, activeID: string, listError: boolean

// Data Schema for /artists - {"artistID":"827jshsg6736y34788478dh","firstName":"Quentin","lastName":"Tarantino","imageURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg/896px-Quentin_Tarantino_by_Gage_Skidmore.jpg","art":"direction"}

class ArtistList extends Component {
  render() {
    let {isLoading, listError, artistList} = this.props
    // display placeholder while loading and in case of API error
    let showList = !isLoading && !listError
    return (
      <Nav variant='pills' className='flex-column'>
      {!!showList ? artistList.map(function(artist) {
        return(<Nav.Item>
          <Nav.Link eventKey={artist.artistID}><img src={artist.imageURL} alt=`{artist.firstName} + {artists.lastName}`/> `{artist.firstName} + {artists.lastName}` </Nav.Link>
          </Nav.Item>)
        }) : <Nav.Item> <Nav.Link eventKey='1'> 'Loading'</Nav.Link> </Nav.Item>
      }
      </Nav>)
  }
};

export default ArtistList;
