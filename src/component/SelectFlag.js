import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton';
import {
  IconFlagTR,
  IconFlagDE,
  IconFlagUS
} from 'material-ui-flags';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

export default function ControlledOpenSelect() {
  const classes = useStyles()
  const [age, setAge] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="English">
            <em><IconFlagUS/></em>
          </MenuItem>
          <MenuItem value={10}> < IconFlagDE/> </MenuItem>
          <MenuItem value={20}> < IconFlagTR/></MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
