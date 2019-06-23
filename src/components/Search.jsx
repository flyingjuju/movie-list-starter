import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
    }
    inputHandler(e) { 
       this.props.handleInputChange(e)
    }
    render() {
        return(
            <form id='search' 
                onChange={e => {this.inputHandler(e.target.value)}}
                onSubmit={e => {e.preventDefault();
                    // console.log(e.target.firstChild.value)
                    this.inputHandler(e.target.firstChild.value)
                }}
               
            >
                <input type='text' size='31'/>     
                <input type='submit' value="Go!" id='searchbtn'/>
            </form>
            
        )
    }
}   

export default Search;