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
			<input value={this.state.searchedVal} onChange={this.onChange}></input> 
			<button onClick={this.onClick}>Search</button>
			</div>
			)

	}
	
}

export default ListItem;