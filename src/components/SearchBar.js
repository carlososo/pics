import React from 'react';

class SearchBar extends React.Component{

    onFormSubmit =(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.search);
        
    }

    state ={search: ''}
    render(){
        return (
        <div className= "ui segment"> 
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label> Image Search:</label>
                    <input type="text" value={this.state.search} onChange={(e)=>this.setState({search: e.target.value})}/>
                </div>
            </form>
        </div>
        );
    };
}

export default SearchBar;