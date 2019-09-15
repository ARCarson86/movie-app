import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
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
							Header: "Actions",
							accessor: "id",
							Cell: ({value}) => (<div className="table-actions"><a href={'/movielists/' + value}><i className="far fa-edit" /></a><a href="/" onClick={() => this.handleDestroy(value)}><i className="fas fa-trash-alt" /></a></div>),
						},
					]}
				/>
			);
		}
	}

  render() {
  	console.log(this.state.data);
    return(
      <div className="container">
      	<div className="row">
      		<div className="col-12">
		        <h1>Movie Lists <div className="header-actions"><a href="/movielists/new" className="btn btn-primary pull-right">Create New List</a></div></h1>
		        {this.renderTable()}
		      </div>
		    </div>
      </div>
    )
  }
}
export default MovieLists