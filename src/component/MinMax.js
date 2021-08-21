import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '10px 0px',
    maxWidth: '300px',
  },
  inLine: {
    margin: '0px',
    padding: '20px ',
    
  },
}))

export default function MinMax() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="$ MIN"
        label="$ MIN"
        variant="outlined"
        color="primary"
      />{' '}
      <p className={classes.inLine}> - </p>
      <TextField
        id="$ MAX"
        label="$ MAX"
        variant="outlined"
        color="primary"
      />
    </form>
  )
}
