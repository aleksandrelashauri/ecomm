import React from 'react'
import { Grid, Box } from '@material-ui/core'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import { makeStyles } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import MapIcon from '@material-ui/icons/Map'

const useStyles = makeStyles((theme) => ({
  bstflexible1:{
    display:"flex",
    background: '#2E2E2E',
    padding: '34px',
    color: '#F8FFFF',
  },
  bstflexible: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  padd: {
    display: 'flex',
    flexDirection: 'column',
  },
  under: {
    borderBottom: '1px solid #105CD8',
    paddingBottom: '10px',
    cursor: 'pointer',
  },
 
}))

export default function Informations() {
  const classes = useStyles()
  return (
    <Grid container className={classes.bstflexible1}>
    <Grid container className={classes.bstflexible}>
      
      <Box item className={classes.padd}>
        <h3 className={classes.under}>About me</h3>
        <p>Here you can use rows and columns to</p>
          <p>organize your footer content. Lorem </p>
          <p>ipsum dolor sit amet, consectetur </p>
          <p>adipisicing elit.</p>
      </Box>
      <Box item className={classes.padd}>
        <h3 className={classes.under}>Products</h3>
        <p>MDBootstrap</p>
        <p>MDWordPress</p>
        <p>BrandFlow</p>
        <p>Bootstrap Angular</p>
      </Box>
      <Box item className={classes.padd}>
        <h3 className={classes.under}>Useful links</h3>
        <p>Your Account</p>
        <p>Become an Affiliate</p>
        <p>Shipping Rates</p>
        <p>Help</p>
      </Box>
      <Box item className={classes.padd}>
        <h3 className={classes.under}>Contacts</h3>
        <p>
          <MapIcon style={{ fontSize: '20px', paddingRight: '10px' }} />
          New York, Avenue Street 10
        </p>
        <p>
          <PhoneAndroidIcon
            style={{ fontSize: '20px', paddingRight: '10px' }}
          />
          042 876 836 908
        </p>
        <p>
          <MailIcon style={{ fontSize: '20px', paddingRight: '10px' }} />
          company@example.com
        </p>
        <p>
          <WatchLaterIcon style={{ fontSize: '20px', paddingRight: '10px' }} />
          Monday - Friday: 10-17
        </p>
      </Box>
    </Grid>
    </Grid>
  )
}
