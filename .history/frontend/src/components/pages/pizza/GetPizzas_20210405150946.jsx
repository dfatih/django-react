import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { withStyles  } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Pizzas from './PizzaCard';

const useStyles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
});

class GetPizzas extends Component {
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
  };

  componentDidMount() {
    this.getPizzas();
  }

  getPizzas = () => {
    axios
      .get("/pizzas/pizzas/")
      .then((res) => this.setState({ pizzas: res.data }))
      .catch((err) => console.log(err))
  };

  putOrder = (item) => {
    axios
      .post("/orders/orders/", item)
      .catch((err) => console.log(err))
  }

  renderItems = () => {
      const newItems = this.state.pizzas;
      return newItems.map(item => (
        <Pizzas
          id={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          putOrder={this.putOrder}
        />
      ));
  };


  render() {
    const { classes } = this.props;
    return (
     <Container className={classes.cardGrid} maxWidth="md">
             <Grid container spacing={4}>
                 {this.renderItems()}
             </Grid>
      </Container>
    );
  }
}



export default withStyles(useStyles)(GetPizzas);

