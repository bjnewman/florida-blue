import React, { Component, Fragment } from 'react';
import  { TabContent, TabPane } from 'react-bootstrap';

// usage: <ArtistDetail activeID={activeID} activeArtistData={activeArtistData} initial={initialDetailView} loading={this.state.loadingDetail} className='col-sm-8'/>
// props: {activeArtist: string UUID, activeArtistData: Json object, initial: boolean, loading: boolean}

function placeholder(){
	return (<Fragment><h3> 'Welcome to the Hollywood Artist Directory' </h3>
		<p> Please click the name of an individual from the list on this page to see more detailed information </p></Fragment>);
}

function infoHtml(artist){
	return (<Fragment><h3> {`${artist.firstName} ${artist.lastName}`}</h3>
		<img alt={`${artist.firstName} ${artist.lastName}`} src={artist.imageURL} />
		<p> {artist.art}</p>
		<p> {`${artist.dateOfBirth} xx years old `}</p>
		<p> {`Born in ${artist.placeOfBirth}`}</p></Fragment>)
}

class ArtistDetail extends Component {
	render() {
		let showPlaceholder = !this.props.loading && (this.props.activeID === '1')
		return (<TabContent>
	        <TabPane eventKey={this.props.activeID}>
	          {showPlaceholder ? placeholder() : infoHtml(this.props.activeArtistData)}
	        </TabPane>
	      </TabContent>)
	}
}

export default ArtistDetail;
