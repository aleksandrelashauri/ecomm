import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    padding: '6px',
  },
  MousH: {
    cursor: 'pointer',
    padding: '6px',
    color: 'gray',
    fontSize:'80%',
  },
  PAD: {
    padding: '24px',
    lineHeight: 1.5,
    marginBottom:'1rem',
    fontSize:'1.5rem',
  },
}))

export default function FirstList() {
  const classes = useStyles()

  return (
    <div>
      <Grid className={classes.PAD}>
        <div className={classes.demo}>
          <List>
            <Typography variant="h6" className={classes.title}>
              Subcategories
            </Typography>
            <ListItem className={classes.MousH}>
              RETURN TO CLOTHING, SHOES, ACCESSORIES
            </ListItem>
            <ListItem className={classes.MousH}>DRESSES</ListItem>
            <ListItem className={classes.MousH}>TOPS, TEES & BLOUSES</ListItem>
            <ListItem className={classes.MousH}>SWEATERS</ListItem>
            <ListItem className={classes.MousH}>
              FASHION HOODIES & SWEATSHIRTS
            </ListItem>
            <ListItem className={classes.MousH}>JEANS</ListItem>
          </List>
        </div>
      </Grid>
    </div>
  )
}
