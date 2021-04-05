import axios from 'axios';
import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, address1, address2, zip_code, city, status) {
  return { id, name, address1, address2, zip_code, city, status };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        name: "",
        description: "",
        image: ""
      },
      orders: []
      };
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => {
    axios
      .get("/orders/orders/")
      .then((res) => this.setState({ orders: res.data }))
      .catch((err) => console.log(err))
  };

  render(){
    const { classes } = this.props;
    const newItems = this.state.orders;

    return (
      <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Addresse</TableCell>
            <TableCell>Zip Code</TableCell>
            <TableCell align="right">Stadt</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newItems.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address1} {row.address2}</TableCell>
              <TableCell>{row.zip_code}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Orders);