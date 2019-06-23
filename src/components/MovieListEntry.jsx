import React from 'react';

class MovieListEntry extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        var style = {'listStyleType': 'none'}
        return (
            <li style={style}>{this.props.movie.title}</li>
        )
    }  
}

export default MovieListEntry;