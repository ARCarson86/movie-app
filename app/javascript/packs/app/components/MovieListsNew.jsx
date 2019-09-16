import React from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";

class MovieListsNew extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: {
				name: ''
			},
			redirect: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		axios.post('http://localhost:3000/api/movielists', this.state.data).then((response) => {
			this.setState({
				redirect: true
			});
		});
	}

	handleChange(event){
		this.setState({
			data: {
				name: event.target.value
			}
		})
	}

	render(){

		if(this.state.redirect){
			return <Redirect to='/' />
		}

		return(
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1><div className="home"><Link to='/' className="btn btn-primary">Home</Link></div> Create New List</h1> 
						<form onSubmit={this.handleSubmit}>
							<div className="form-group"><input placeholder="Name" type="text" defaultValue={this.state.data.name} onChange={this.handleChange} className="form-control" /></div>
							<div className="form-group"><input type="submit" value="Create List" className="btn btn-primary" /></div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieListsNew