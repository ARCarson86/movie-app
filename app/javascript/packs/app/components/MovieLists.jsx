import React from 'react';
import axios from 'axios';

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

  render() {
  	console.log(this.state.data);
    return(
      <div>
        <h1>Test</h1>
      </div>
    )
  }
}
export default MovieLists