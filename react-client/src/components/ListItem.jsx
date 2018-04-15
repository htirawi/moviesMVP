import React from 'react';


class ListItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {searchedVal : ""};
		this.onClick = this.onClick.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	onClick(){
		this.props.onSearch(this.state.searchedVal);
	}

	onChange(e){
		this.setState({
			searchedVal:e.target.value
		})
	}

	render(){
		return(
			<div>
			<input placeholder= 'Search for a movie...' value={this.state.searchedVal} onChange={this.onChange}></input> 
			<br/>
			<br/>
			<br/>
			<button onClick={this.onClick}>Search</button>
			</div>
			)

	}
	
}

export default ListItem;