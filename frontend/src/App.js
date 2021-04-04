import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        name: "",
        description: "",
        image: ""
      },
      pizzas: []
      };
  }
  
  async componentDidMount() {
    this.getPizzas();
  }

  getPizzas = () => {
    axios
      .get("/pizzas/pizzas/")
      .then((res) => this.setState({ pizzas: res.data }))
      .catch((err) => console.log(err))
  };


  renderItems = () => {
      const newItems = this.state.pizzas;
      return newItems.map(item => (
        <ul>
          <li key={item.id}><a href={ item.image }>{ item.name }</a></li>
          <ul>
          <li key={item.id}> { item.description }</li>

          </ul>
        </ul>
      ));
  };


  render() {
    return (
      <div>
                {this.renderItems()}
        
      </div>
    );
  }
};


export default App;
