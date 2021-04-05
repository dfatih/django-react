import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = (theme) => ({
   root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
});

const pizza_sizes = [
  {
    value: 'Small',
    label: 'Small',
  },
  {
    value: 'Medium',
    label: 'Medium',
  },
  {
    value: 'Large',
    label: 'Large',
  },
];

class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      form: {
        name: '',
        address1: '',
        address2: '',
        zip_code: '',
        city: '',
        status: 'accepted',
       
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({target: {value}}) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  handleSubmit = () => {
    const {form} = this.state
    console.log(from)
    this.props.putOrder(form)
  }

  render(){
    const {classes} = this.props;
    const {open, form: {name, address1, zip_code, city}} = this.state;
    return (
      <React.Fragment>
         <Button
          variant="outlined"
          color="primary"
          onClick={this.handleToggle}
          className={classes.button}
          startIcon={<AddShoppingCartIcon />}
        >
          Buy Now
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">Your Order</DialogTitle>
          <DialogContent>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField 
                id="outlined-search" 
                label="Name" 
                type="search" 
                variant="outlined"
                value={name}
                onChange={this.handleChange('name')}
              />
              <TextField 
                id="outlined-search" 
                label="Addresse" 
                type="search" 
                variant="outlined"
                value={address1}
                onChange={this.handleChange('address1')}
              />
              <TextField 
                id="outlined-search" 
                label="Zip Code" 
                type="search" 
                variant="outlined"
                value={zip_code}
                onChange={this.handleChange('zip_code')}
              />
              <TextField 
                id="outlined-search" 
                label="City" 
                type="search" 
                variant="outlined"
                value={city}
                onChange={this.handleChange('city')}
              />
             
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmit} color="primary">
              Place Order
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(FormDialog);