import React from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";

class MovieNew extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: {
				name: '',
				rating: '',
				release_year: ''
			},
			redirect: false
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleRatingChange = this.handleRatingChange.bind(this);
		this.handleYearChange = this.handleYearChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		axios.post('http://localhost:3000/api/movielists/' + this.props.match.params.list_id + '/movies', this.state.data).then((response) => {
			this.setState({
				redirect: true
			});
		});
	}

	handleNameChange(event){
		let data = this.state.data;
		data.name = event.target.value;
		this.setState({
			data: data
		})
	}

	handleRatingChange(event){
		let data = this.state.data;
		data.rating = event.target.value;
		this.setState({
			data: data
		})
	}

	handleYearChange(event){
		let data = this.state.data;
		data.release_year = event.target.value;
		this.setState({
			data: data
		})
	}
	render(){

		if(this.state.redirect){
			return <Redirect to={'/movielists/' + this.props.match.params.list_id} />
		}

		return(
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1><div className="home"><Link to='/' className="btn btn-primary">Home</Link></div> Add Movie</h1> 
						<form onSubmit={this.handleSubmit}>
							<div className="form-group"><input placeholder="Name" type="text" defaultValue={this.state.data.name} onChange={this.handleNameChange} className="form-control" /></div>
							<div className="form-group"><input placeholder="Rating 1-10" type="text" defaultValue={this.state.data.rating} onChange={this.handleRatingChange} className="form-control" /></div>
							<div className="form-group"><input placeholder="Release Year" type="text" defaultValue={this.state.data.release_year} onChange={this.handleYearChange} className="form-control" /></div>
							<div className="form-group"><input type="submit" value="Add Movie" className="btn btn-primary" /></div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieNew