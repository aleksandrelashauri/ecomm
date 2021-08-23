import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core";
import Loyout from "../Loyout/Loyout";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import InfoIcon from '@material-ui/icons/Info';
import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Quantity from '../component/Quantity'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const useStyles = makeStyles(() => ({
  cart: {
    fontWeight:500,
    minWidth: "100%",
    zIndex: "1",
    backgroundColor: "#FBFBFB",
    padding: "100px 0 50px 0",
    textAlign: "center",
    fontSize: "30px",
    color:'#4f4f4f',
  },
  img: {
    width: "80%",
  },
  root: {
    display: "flex",
  },
  root2: {
    display: "flex",
    flexDirection: "column",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 12,
  },
  pos: {
    marginBottom: 12,
  },
  bluetext:{
    color:'blue'
  },
  exp:{
    padding: "100px 0 50px 0",
    textAlign: "center",
    fontSize: "30px",
  },

}));

const CartPage = () => {
  const classes = useStyles();

  return (
    <Loyout>
      <Box className={classes.cart}>Shopping cart</Box>
      <Container>
          <Grid container>
            <Grid item xs={12} md={8}>
            <Box className={classes.title}>Cart</Box>

              <Card className={classes.root}>
                <Grid container>
                  <Grid item xs={12} md={3}>
                    {" "}
                    <img
                      alt="Picture"
                      className={classes.img}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <CardContent>
                      <Box className={classes.pos}>Color:</Box>
                      <Box className={classes.pos} color="textSecondary">
                        Size:
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button>
                        <DeleteForeverIcon />
                        Remove Item
                      </Button>
                      <Button>
                        <FavoriteBorderIcon/>
                      Move to wish list 
                      </Button>
                    </CardActions>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box>
                      <Quantity/>
                    </Box>
                    <Box>(Note, 1 piece)</Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.root2}>
                <CardContent>
                  <Box className={classes.title}>The total amount of</Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box>Temporary amount</Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box>Shipping</Box>
                    <Box>Free</Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box fontWeight=' 500 '>The total amount of (including VAT)</Box>
                    <Box> $</Box>
                  </Box>
                </CardContent>

                <CardActions>
                <Button variant="contained" color="primary">
                    Go To Checkout
                    </Button>
                </CardActions>
               
            
                  
              </Card>
              <CardActions>
                  <Button>    Add a discount code (optional)</Button>
                </CardActions>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
          <Card className={classes.root2}>
            <box className={classes.bluetext}>
              <InfoIcon/>
            Do not delay the purchase, adding items to your cart does not mean booking them.
            </box>
            <box className={classes.exp}>
            Expected shipping delivery
            </box>
            <box >
            Thu., 12.03. - Mon., 16.03.
            </box>
            <box className={classes.exp}>
            We accept
            </box>
            <box fontSize='xxx-large' >
            <PaymentIcon fontSize='xxx-large'/>
            <AttachMoneyIcon fontSize='xxx-large'/>
            <PaymentIcon fontSize='xxx-large'/>
            </box>
            </Card>
          </Grid>
      </Container>
    </Loyout>
  );
};

export default CartPage;