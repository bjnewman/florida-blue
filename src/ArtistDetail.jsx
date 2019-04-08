import React, { Component, Fragment } from 'react';
import  { TabContent, TabPane } from 'react-bootstrap';
import moment from 'moment'

// usage: <ArtistDetail activeID={activeID} activeArtistData={activeArtistData} initial={initialDetailView} loading={this.state.loadingDetail} className='col-sm-8'/>
// props: {activeArtist: string UUID, activeArtistData: Json object, initial: boolean, loading: boolean}

function ageFromBirthDate(dateGiven) {
	const parsedDate = moment(dateGiven, "DD-MMM-YYYY")
    const ageInYears = moment().diff(parsedDate, 'years')
    return ageInYears;
}

class ArtistDetail extends Component {
	constructor(props) {
		super(props);
		this.infoHtml = this.infoHtml.bind(this);
	}
	placeholder () {
		return (<Fragment><h3> 'Welcome to the Hollywood Artist Directory' </h3>
			<p> Please click the name of an individual from the list on this page to see more detailed information </p></Fragment>);
	}
	infoHtml(artist){
		return (<Fragment><h3> {`${artist.firstName} ${artist.lastName}`}</h3>
			<img className='detail-image' alt={`${artist.firstName} ${artist.lastName}`} src={artist.imageURL} />
			<p className = 'capitalize'> {artist.art}</p>
			<p> {`${artist.dateOfBirth} ${ageFromBirthDate(artist.dateOfBirth)} years old `}</p>
			<p> {`Born in ${artist.placeOfBirth}`}</p></Fragment>)
	}
	render() {
		let showPlaceholder = this.props.loading || (this.props.activeID === '1')
		return (<TabContent className='detail-parent'>
	        <TabPane eventKey={this.props.activeID}>
	          {showPlaceholder ? this.placeholder() : this.infoHtml(this.props.activeArtistData)}
	        </TabPane>
	      </TabContent>)
	}
}

export default ArtistDetail;
