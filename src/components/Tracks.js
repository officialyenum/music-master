import React, { Component } from 'react';

class Tracks extends Component {
    state = { playing:false, audio: null, playingPreviewUrl: null};
    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({playing:true, audio, playingPreviewUrl: previewUrl});
        }else {
            this.state.audio.pause();
            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({playing: false});
            } else {
                audio.play();
                this.setState({audio, playingPreviewUrl:previewUrl});
            }
        }
    }
    render() {
        const {tracks} = this.props;

        return (
                    <div className="mt-2">
                        {
                            tracks.map(track => {
                                const { id, name, album, preview_url } = track;

                                return (
                                    <div 
                                        onClick={this.playAudio(preview_url)}
                                        key={id} 
                                        style={{ display:'inline-block', width:300, margin:5 }}>
                                        <img  
                                            src={album.images[0].url && album.images[0].url} 
                                            alt="artist-profile"
                                            style={{
                                                width:200,
                                                height:200,
                                                borderRadius:100
                                            }}
                                        />
                                        <p>{name}</p>
                                    </div> 
                                )
                            })
                        }
                    </div>
        )


    }
}


export default Tracks;