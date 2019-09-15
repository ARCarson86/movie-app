import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class MovieListsEdit extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: {},
			isLoading: true,
			redirect: false
		}

		this.getMovieList();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async getMovieList(){
		const response = await axios.get('http://localhost:3000/api/movielists/' + this.props.match.params.id);
		this.setState({data: response.data, isLoading: false});
	}

	handleSubmit(event){
		event.preventDefault();
		axios.put('http://localhost:3000/api/movielists/' + this.props.match.params.id, this.state.data).then((response) => {
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
						<h1>Update List</h1> 
						<form onSubmit={this.handleSubmit}>
							<div className="form-group"><input placeholder="Name" type="text" defaultValue={this.state.data.name} onChange={this.handleChange} className="form-control" /></div>
							<div className="form-group"><input type="submit" value="Update List" className="btn btn-primary" /></div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieListsEdit