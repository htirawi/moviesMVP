import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
	<div>
	<h4> Movies Component </h4>
	There are { props.items.length } movies.
	{
		props.items.map(function(item){
			return <div>
			<h1> {item.title} </h1>
			<h4> {item.year} </h4>
			<h4> {item.type} </h4>

			</div>
		})
	}
	</div>
	)

export default List;

    // { props.items.map(item => <ListItem item={item}/>)}
