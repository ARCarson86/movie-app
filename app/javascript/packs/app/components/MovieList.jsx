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
					<h1>{this.state.data.name} <div className="header-actions"><Link to={'/movielists/' + this.props.match.params.id + '/movies/new'} className="btn btn-primary">Add Movie</Link></div></h1>
					<ReactTable
						data={this.state.movies}
						defaultPageSize={this.state.movies.length}
						showPagination={false}
	        	noDataText="No Results Found"
						columns={[
							{
								Header: "Name",
								accessor: "name",
							},
							{
								Header: "Actions",
								accessor: "id",
								Cell: ({value}) => (<div className="table-actions"><Link to={'/movielists/' + this.props.match.params.id + '/movies/' + value + '/edit'}><i className="far fa-edit" /></Link><a href="/" onClick={(e) => this.handleDestroy(e, value)}><i className="fas fa-trash-alt" /></a></div>),
							},
						]}
					/>
				</div>
			);
		}
	}

	render() {
    return(
      <div className="container">
      	<div className="row">
      		<div className="col-12">
		        {this.renderTable()}
		      </div>
		    </div>
      </div>
    )
  }
}
export default MovieList
