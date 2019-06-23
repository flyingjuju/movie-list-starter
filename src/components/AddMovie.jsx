import React from 'react';

var AddMovie = (props) => (
    <form id='add' 
        onSubmit = {e=>{
            e.preventDefault();
            props.handleAddSubmit(e.target.firstChild.value) 
            // console.log(e.nativeEvent)
            // console.log(e.target[0].value)
        }}
    >
        <input type='text' size='31'></input>
        <input type='submit' value='Add' id='addbtn'></input>
    </form>
)
export default AddMovie;