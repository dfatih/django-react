import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PlaceOrder from '../../FormDialog';
import { Component } from 'react';

const useStyles = (theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});;

  class PizzaCard extends Component {

    render(){
      const {classes} = this.props;
      return (
          <Grid item xs={12} sm={12} md={6} >
                  <Card className={classes.card} value={this.props.id} key={this.props.id}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={this.props.image}
                      title={this.props.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {this.props.name}
                      </Typography>
                      <Typography>
                        {this.props.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                     <PlaceOrder
                      putOrder={this.props.putOrder}
                     />
                    </CardActions>
                  </Card>
          </Grid>
      );
    };
}

export default withStyles(useStyles)(PizzaCard);