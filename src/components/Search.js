import React, { Component } from 'react';

class Search extends Component {
    state = { artistQuery: ''}
    updateArtistQuery = event => {
        this.setState({ artistQuery : event.target.value });
    }

    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }
    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }
    render() { 
        return (
                <div className="input-group mx-sm-3 mb-2">
                    <input type={"text"} className="form-control" onChange={this.updateArtistQuery} onKeyPress={this.handleKeyPress} placeholder='Search for an Artist'/>
                    <button onClick={this.searchArtist} className="btn btn-success">Search</button>
                </div>
        )
    }

}


export default Search;