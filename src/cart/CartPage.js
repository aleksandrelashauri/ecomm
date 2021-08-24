import React, { useEffect } from "react";
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
import { selectCart } from "../store/products/prodSelector";
import { setLoading } from "../store/user/userActionsCreator";
import { Api } from "../Hooks/CustomApiHook";
import { setCart } from "../store/products/prodActionCreat";
import { useParams } from "react-router-dom";
import Loader from "../component/Loader";
import { selectLoading } from "../store/user/userSelector";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import InfoIcon from '@material-ui/icons/Info';
import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Quantity from '../component/Quantity'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import BasicTextFields from './components/textField'

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
    width: "49%",
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
    padding: "100px 0 20px 0",
    fontSize: "30px",
  },

}));

const CartPage = () => {
  const classes = useStyles();
  const cart = useSelector(selectCart);
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  console.log(cart);

  useEffect(() => {
    dispatch(setLoading(true));
    Api.getSingleProduct(id)
      .then((json) => {
        dispatch(setCart(json));

        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => dispatch(setLoading(false)));
  }, [id]);


  return (
    <Loyout>
      <Box className={classes.cart}>Shopping cart</Box>
      <Container>
      <Loader isLoading={loading}>
      {!!cart.hasOwnProperty("image")}
          <Grid container>
            <Grid item xs={12} md={8}>
            <Box className={classes.title}>Cart</Box>
              <Card className={classes.root}>
                <Grid container>
                  <Grid item xs={12} md={3}>
                    {" "}
                    <img
                      src={cart.image}
                      alt="surati"
                      className={classes.img}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <CardContent>
                    <Box className={classes.title}>{cart.title}</Box>
                      <Box className={classes.pos}>Color:{cart.color}</Box>
                      <Box className={classes.pos} color="textSecondary">
                        Size:{cart.color}
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
                    <Box marginTop="100px">$ {cart.price}</Box>
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
                    <Box>{cart.price}</Box>

                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box>Shipping</Box>
                    <Box>Free</Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box fontWeight=' 500 '>The total amount of (including VAT)</Box>
                    <Box> $</Box>
                    <Box>{cart.price}</Box>
                  </Box>
                </CardContent>
                <CardActions>
                <Button variant="contained" color="primary">
                    Go To Checkout
                    </Button>
                </CardActions>    
                <BasicTextFields/>    
              </Card>
              <CardActions>
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
            <box >
            <AttachMoneyIcon fontSize="large" color="secondary"/>
            <EuroSymbolIcon  fontSize="large" color="secondary"/>
            <PaymentIcon fontSize="large"  color="secondary"/>
            <AccountBalanceWalletIcon fontSize="large" color="secondary"/>
            </box>
            </Card>
          </Grid>
          </Loader>
      </Container>
    </Loyout>
  );
};

export default CartPage;