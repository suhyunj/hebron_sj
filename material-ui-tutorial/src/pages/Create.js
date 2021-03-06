import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

{/*const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'beige'
    }
  },
  titled: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})
*/}

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(title, details, category)
    }
  }

  return (
    <Container>
      {/*
      <Typography 
        variant="h1"
        color="primary"
        align="center"
      >
        Create a New Note
      </Typography>
      */}
     
      {/*
      <Typography 
        color="secondary"
        noWrap
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      */}

      <Typography
        //className={classes.titled}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom>
        
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Detailed"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

      <FormControl className={classes.field}>
        <FormLabel>Note Categories</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio />} label="Money" />
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
          <FormControlLabel value="work" control={<Radio />} label="Work" />
        </RadioGroup>
      </FormControl>

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}>
        Submit
      </Button>
      </form>  

      

      {/* <Button type="submit" color="default">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">Submit</Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup> */}

    {/* icons */}
    <br/>
    {/* <Typography variant=""AcUnitIcon />
    <AcUnitIcon color="secondary" fontSize="large" />
    <AcUnitIcon color="secondary" fontSize="small" />
    <AcUnitIcon color="action" fontSize="small" />
    <AcUnitIcon color="error" fontSize="small" />
  <AcUnitIcon color="disabled" fontSize="small" /> */}

    </Container>
  )
}
