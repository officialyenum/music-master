import React, { Component } from 'react';
import Artist from '../components/Artist';
import Tracks from '../components/Tracks';
import Search from '../components/Search';

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
    state = { artist: null, tracks: [] };
    componentDidMount() {
        this.searchArtist('wizkid');
    }
    searchArtist = artistQuery => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then(response => response.json())
            .then(json => {
                if(json.artists.total > 0) {
                    const artist = json.artists.items[0];
                    this.setState({artist});
                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => {
                            console.log(json.tracks);
                            this.setState({tracks: json.tracks});
                        })
                        .catch(eror => alert(error.message));
                }
            })
    }
    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                {
                    this.state.artist != null 
                    ? <Artist key={this.state.artist.id} artist={this.state.artist}/>
                    : null
                }
                <h3>Top Ten Tracks</h3>
                {
                    this.state.tracks.length > 0
                    ? <Tracks key={this.state.tracks.id} tracks={this.state.tracks}/>
                    : null
                }
            </div>
        )
    }

}


export default App;