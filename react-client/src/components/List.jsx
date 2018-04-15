import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
	<div>
	There are { props.items.length } movies.
	{
		props.items.map(function(item){
			return <div>
			<h3> {item.title} </h3> {'\n'}<h4>{item.year} {item.type} </h4>
			</div>
		})
	}
	</div>
	)

export default List;

    // { props.items.map(item => <ListItem item={item}/>)}
