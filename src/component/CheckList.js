import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  PAD: {
    padding: '24px',
  },
  title: {
    paddingLeft: '10px',
  },
}))

export default function CheckboxList() {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List className={(classes.root, classes.PAD)}>
      <Typography variant="h6" className={classes.title}>
        Condition
      </Typography>
      {['NEW', 'USED', 'COLLECTIBLE', 'RENEWED'].map((value) => {
        const labelId = `checkbox-list-label-${value}`

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                color="primary"
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={` ${value}`} />
          </ListItem>
        )
      })}
    </List>
  )
}
