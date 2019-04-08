import React, { Component } from 'react';
import './App.css';
import { TabContainer, Row } from 'react-bootstrap';
import ArtistList from './ArtistList.jsx';
import ArtistDetail from './ArtistDetail.jsx';

// The effective logic for this mini-app: 
// 1. Load full list on initial mount. 
// 2. Display placeholder in detail view until user selects an artist
// 3. On list click fetch detailed info and display in ArtistDetail Component when loaded successfully.
// 4. If API error in full list (at /artists) display placeholder text and ask user to refresh page
// 5. If API error in detailed view (at /artist/:id) change placeholder text, initially ask for refresh if enough time add reload button


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistsList: [],
      detailData: {},
      activeID: '1',
      loadingList: true,
      loadingDetail: false,
      listError: false,
      detailError: false,
    }
    this.handleListClick = this.handleListClick.bind(this);
    this.fetchArtistListData = this.fetchArtistListData.bind(this);
  }
  componentWillMount(){
    this.fetchArtistListData()
  }
  fetchArtistListData() {
    fetch('https://fb-assessment.glitch.me/artists')
      .then(response => response.json())
      .then(responseJson => this.setState({artistsList: responseJson, loadingList: false, listError: false }))
      .catch(error => this.setState({listError: true}))
  }
  handleListClick(artistID) {
    this.setState({ loadingDetail: true }, () => {
      fetch(`https://fb-assessment.glitch.me/artists/${artistID}`)
      .then(response => response.json())
      .then(responseJson => this.setState({activeID: artistID, detailData: responseJson, loadingDetail: false}))
      .catch(error => this.setState({detailError: true}))
    })
  }
  render() {
    let { activeID, detailData } = this.state 
    let initialDetailView = activeID === '1' //all others are UUID-ish
    return (<TabContainer id='list-group-tabs' defaultActiveKey='first'>
        <Row> 
          <ArtistList className='list-container' handleListClick={this.handleListClick} artistList={this.state.artistsList} loading={this.state.loadingList} activeID={this.state.activeID} error={this.state.listError} className='col-sm-4'/>
          <ArtistDetail className='detail-container' activeID={activeID} activeArtistData={detailData} initial={initialDetailView} loading={this.state.loadingDetail} className='col-sm-8'/>
        </Row>
      </TabContainer>
    );
  }
}

export default App;
