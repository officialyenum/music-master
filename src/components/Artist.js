import React from 'react';

const Artist = ({artist}) => {
    const { images, name, followers, genres } = artist;
    return (
        <div className="row align-items-center mt-5 mb-5 ">
            <div className="col">
            </div>
            <div className="col">
                <div className="container">
                    <div className="card yenum-dark-color" style={{width:500}}>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{followers.total} followers</p>
                            <p className="lead">{genres.join(',')}</p>
                            <img  
                                src={images[0] && images[0].url} 
                                alt="artist-profile"
                                style={{
                                    width:200,
                                    height:200,
                                    borderRadius:100
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
            </div>
        </div>
        
    )
}

export default Artist;