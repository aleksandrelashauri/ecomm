import React from 'react'
import FirstList from '../../../component/FirstList'
import SearchInp from '../../../component/SearchInp'
import CheckboxList from '../../../component/CheckList'
import RatingList from '../../../component/RatingList'
import RadioList from '../../../component/RadioList'
import PriceSlider from '../../../component/PriceSlider'
import SizeList from '../../../component/SizeList'
import ColoredCheckbox from '../../../component/ColoredCheckbox'
import {Grid}  from '@material-ui/core'  
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  spaceBT: {
    display: 'flex',
    flexDirection: 'column',
  },
  spaceBTW: {
    display:' flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
}))

export default function MainLeftSide() {
    const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container spacing={5}>
      <Grid item xs={12} className={classes.spaceBT }  >
      <Grid item xs={12} className={classes.spaceBTW }  >

      <FirstList />
      <SearchInp />
      <CheckboxList />
      <RatingList />
      <RadioList />
      <PriceSlider />
      <SizeList />
      <ColoredCheckbox />
      </Grid>
      </Grid>
      </Grid>
    </React.Fragment>
  )
}
