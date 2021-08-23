import React from 'react'
import { Button } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { makeStyles } from '@material-ui/core'
import { CARTPAGE } from '../routes'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(4),
  },
}))

export default function Buttons() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Button variant="contained" color="primary">
        Buy Now
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
        component={Link}
        to={CARTPAGE}
      >
        ADD TO CART
      </Button>
    </React.Fragment>
  )
}
