import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
	<div>
	<h4> Movies Component </h4>
	There are { props.items.length } movies.
	{
		props.items.map(function(item){
			return <div>
			<h6> {item.title} {item.year} {item.type} </h6>
			

			</div>
		})
	}
	</div>
	)

export default List;

    // { props.items.map(item => <ListItem item={item}/>)}
