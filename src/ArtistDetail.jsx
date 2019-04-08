import React, { Component } from 'react';
import  { TabContent, TabPane } from 'react-bootstrap';

// usage: <ArtistDetail activeID={activeID} activeArtistData={activeArtistData} initial={initialDetailView} loading={this.state.loadingDetail} className='col-sm-8'/>
// props: {activeArtist: string UUID, activeArtistData: Json object, initial: boolean, loading: boolean}

function placeholder(){
	return (<h3> 'Welcome to the Hollywood Artist Directory' </h3>
		<p> Please click the name of an individual from the list on this page to see more detailed information </p>);
}

function infoHtml(artist){
	return (<h3> `${artist.firstName} ${artist.lastName}`</h3>
		<img alt=`${artist.firstName} ${artist.lastName}` src={artist.imageURL} />
		<p> `${artist.art}`</p>
		<p> `${artist.dateOfBirth}` xx years old </p>
		<p> `Born in ${artist.placeOfBirth}`
}

class ArtistDetail extends Component {
	render() {
		return (<TabContent>
	        <TabPane eventKey='first'>
	          <h3> {this.props} </h3>
	          <img ></img>
	          <p> 'Artist Type' </p>
	          <p> 'DOB , Age, BirthPlace' </p>
	        </TabPane>
	      </TabContent>)
	}
}

export default ArtistDetail;
