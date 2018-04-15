import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListItem from './components/ListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount(value) {
    if(value){
    $.ajax({
      url: '/items', 
      type: 'POST',
      data : {movieName : value},
      success: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

    $.ajax({
      url: '/items', 
      type: 'GET',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Movies List</h1>
      <List items={this.state.items}/>
      <ListItem onSearch={this.componentDidMount.bind(this)}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));