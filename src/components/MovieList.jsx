import React from 'react';
import MovieListEntry from './MovieListEntry';

class MovieList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="moviearea">
            <ul>
                {this.props.movies.map(movie =>
                    <MovieListEntry movie={movie}/>
                )}
            </ul>
        </div>  
        )
    } 
}

export default MovieList;