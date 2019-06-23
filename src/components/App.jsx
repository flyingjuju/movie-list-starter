import React from 'react';
import MovieList from './MovieList';
import movies from '../data/movieSamples'
import Search from './Search'
import AddMovie from './AddMovie'

class App extends React.Component{
    
    constructor (props) {
        super(props);
        this.state = {
            searchTerm: '',
            movies : [],
            filtermovies: null
        }
    }
    handleInputChange(v){
        // console.log(v)
        this.setState({
            searchTerm: v,
            filtermovies: this.state.movies.filter(movie => 
                movie.title.toLowerCase().indexOf(v.toLowerCase()) !== -1
            )   
        })
    }
    handleAddSubmit(newTitle){
        var temp = this.state.movies.slice();
        temp.push({title:newTitle});
        // console.log(temp)
        this.setState({
            movies: temp
        })
    }   
    render () {
        var filterMovieList = this.state.filtermovies
        return (
            <div id='apparea'>
                <h2>MovieList</h2>
                <AddMovie handleAddSubmit = {this.handleAddSubmit.bind(this)} />
                {/* <AddMovie /> */}
                <Search handleInputChange = {this.handleInputChange.bind(this)} />
                <div id='noMovieFound'>
                    {(this.state.filtermovies&&this.state.filtermovies.length===0)? 'no movie found': ''}
                </div>

                <MovieList key='movielist' movies={(this.state.filtermovies||this.state.movies)} />
            </div>
        )
    }
    
}
export default App;