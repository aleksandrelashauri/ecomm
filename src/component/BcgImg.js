import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  BcgImg: {
    display:'flex',
    backgroundImage: `url("https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg")`,
    backgroundSize: 'cover',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: 'bold',
    fontSize: '40px',
    color: 'white',
    opacity: '0.6',
    height: '600px',
    background: 'rgba(0, 0, 0, 0.5)',
  },
}))

export default function BackgroundImg() {
  const classes = useStyles()
  return <div className={classes.BcgImg}>Shop</div>
}
