import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import { Link } from "react-router-dom";
import "react-table/react-table.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

class MovieLists extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			data: {},
			isLoading: true
		}

		this.getMovieLists();
	}

	async getMovieLists(){
		const response = await axios.get('http://localhost:3000/api/movielists');
		this.setState({data: response.data, isLoading: false});
	}

	handleDestroy(id){
		this.setState({isLoading:true});
		axios.delete('http://localhost:3000/api/movielists/'+id);
	}

	renderTable(){
		if(this.state.isLoading){
			return(<h2>Loading Data...</h2>);
		}else{
			return(
				<ReactTable
					data={this.state.data}
					defaultPageSize={this.state.data.length}
					showPagination={false}
        	noDataText="No Results Found"
					columns={[
						{
							Header: "Name",
							accessor: "name",
						},
						{
							accessor: (row) => {
								return row.movies.length
							},
							id: "list_count",
							Header: "List Count"
            },
            {
							accessor: (row) => {
								if(row.movies.length === 0){
									return 0;	
								}
								let sum = 0;
								row.movies.forEach((element, index) => {
									sum += element.rating;
								});
								return (sum / row.movies.length).toFixed(2);
							},
							id: "average_rating",
							Header: "Average Rating"
            },
						{
							Header: "Actions",
							accessor: "id",
							Cell: ({value}) => (<div className="table-actions"><Link to={'/movielists/' + value}><i className="fas fa-plus-square" /></Link><Link to={'/movielists/' + value + '/edit'}><i className="far fa-edit" /></Link><a href="/" onClick={() => this.handleDestroy(value)}><i className="fas fa-trash-alt" /></a></div>),
						},
					]}
				/>
			);
		}
	}

  render() {
    return(
      <div className="container">
      	<div className="row">
      		<div className="col-12">
		        <h1>Movie Lists <div className="header-actions"><Link to="/movielists/new" className="btn btn-primary">Create New List</Link></div></h1>
		        {this.renderTable()}
		      </div>
		    </div>
      </div>
    )
  }
}
export default MovieLists