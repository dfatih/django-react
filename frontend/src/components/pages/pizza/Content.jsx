import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Pizzas from './Pizzas';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));


function Content() {
    const classes = useStyles();
    return (
         <Container className={classes.cardGrid} maxWidth="md">
             <Grid container spacing={4}>
                 <Pizzas/><Pizzas/><Pizzas/><Pizzas/>
             </Grid>
         </Container>
    );
};

export default Content;