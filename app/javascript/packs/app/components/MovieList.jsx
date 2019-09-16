import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import { Link } from "react-router-dom";
import "react-table/react-table.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

class MovieList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: {},
			movies: {},
			isLoading: true
		}

		this.getData();

		this.handleDestroy = this.handleDestroy.bind(this);
	}

	async getData(){
		const response = await axios.get('http://localhost:3000/api/movielists/' + this.props.match.params.id);
		const movies = await axios.get('http://localhost:3000/api/movielists/' + this.props.match.params.id + '/movies');
		this.setState({data: response.data, movies: movies.data, isLoading: false});
	}

	handleDestroy(event, id){
		event.preventDefault();
		this.setState({isLoading:true});
		axios.delete('http://localhost:3000/api/movielists/'+ this.props.match.params.id + '/movies/'+id).then(() => {
			this.getData();
		});
	}

	renderTable(){
		if(this.state.isLoading){
			return(<h2>Loading Data...</h2>);
		}else{
			return(
				<div>
					<h1><div className="home"><Link to='/' className="btn btn-primary">Home</Link></div> {this.state.data.name} <div className="header-actions"><Link to={'/movielists/' + this.props.match.params.id + '/movies/new'} className="btn btn-primary">Add Movie</Link></div></h1>
					<ReactTable
						data={this.state.movies}
						defaultPageSize={this.state.movies.length}
						showPagination={false}
	        	noDataText="No Results Found"
	        	filterable
						columns={[
							{
								Header: "Name",
								accessor: "name",
								filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value)
							},
							{
								Header: "Rating",
								accessor: "rating",
								filterable: false
							},
							{
								Header: "Release Year",
								accessor: "release_year",
								filterable: false
							},
							{
								Header: "Actions",
								accessor: "id",
								filterable: false,
								Cell: ({value}) => (<div className="table-actions"><Link to={'/movielists/' + this.props.match.params.id + '/movies/' + value + '/edit'}><i className="far fa-edit" /></Link><a href="/" onClick={(e) => this.handleDestroy(e, value)}><i className="fas fa-trash-alt" /></a></div>),
							},
						]}
					/>
				</div>
			);
		}
	}

	getRatingAverage(){
		if(this.state.movies.length === 0){
			return 0;
		}
		if(!this.state.isLoading){
			let sum = 0;
			this.state.movies.forEach((element, index) => {
				sum += element.rating;
			});

			return(
				<div className="list-average">Average List Rating: { (sum / this.state.movies.length).toFixed(2) }</div>
			);
		}
	}

	render() {
    return(
      <div className="container">
      	<div className="row">
      		<div className="col-12">
		        {this.renderTable()}
		        {this.getRatingAverage()}
		      </div>
		    </div>
      </div>
    )
  }
}
export default MovieList
