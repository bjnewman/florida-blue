import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'

// usage: <ArtistList artists={this.state.artistsList} loading={this.state.loadingList} activeID={this.state.activeID} error={this.state.listError} className='col-sm-4'/>
// props: {artistList: an array of objects, isLoading: boolean, activeID: string, listError: boolean

// Data response from /artists - {"artistID":"827jshsg6736y34788478dh","firstName":"Quentin","lastName":"Tarantino","imageURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg/896px-Quentin_Tarantino_by_Gage_Skidmore.jpg","art":"direction"}

class ArtistList extends Component {
  constructor(props){
    super(props)
    this.artistMap = this.artistMap.bind(this);
    this.placeholder = this.placeholder.bind(this);
  }
  artistMap(artistList) {
    if (typeof artistList !== 'undefined') {
      console.log(artistList)
      const navs = artistList.map(artist => {
        console.log('mapping artists ' + artist.firstName);
        return(<Nav.Item key={artist.artistID} className ='artist-item'><Nav.Link className='artist-link' eventKey={artist.artistID}><img className='sidebar-image' src={artist.imageURL} alt={`${artist.firstName} ${artist.lastName}`}/> <span style={{margin: '0 auto'}}> {`${artist.firstName} ${artist.lastName}`} </span></Nav.Link></Nav.Item>)
      })
      return navs
    } else {
      console.log('artist list is undefined')
    }
  }
  placeholder() {
    return(<Nav.Item className='artist-item'> <Nav.Link className='artist-link' disabled eventKey='1'> {"Loading"}</Nav.Link> </Nav.Item>)
  }
  render() {
    let {isLoading, listError, artistList, handleListClick} = this.props;
    // display placeholder while loading and in case of API error
    let showList = !isLoading && !listError;
    console.log('show list is ' + showList)
    let shouldMap = showList && (typeof artistList !== 'undefined') && (artistList.length !== 0);
    return (
      <Nav variant='pills' className='flex-column list-container' onSelect={key => handleListClick(key)}>
      {(showList && shouldMap) ? this.artistMap(artistList) : this.placeholder()}
      </Nav>)
  }
};

export default ArtistList;
