import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
	<div>
	<h4> List Component </h4>
	There are { props.items.length } items.
	{props.items.map(function(item){
		return <h1> {item.movieName} </h1>
	})}
	</div>
	)

export default List;

    // { props.items.map(item => <ListItem item={item}/>)}
