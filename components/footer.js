import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import {
  Typography,
  Button
} from '@material-ui/core'

import Container from 'components/container'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingBottom: 30,

    '& img': {
      height: 25,
      verticalAlign: 'middle',
      marginTop: -3
    },

    '& p': {
      marginBottom: 15
    },

    '& a': {
      color: 'black',
      fontWeight: 600,
      transition: 'color 0.3s ease',

      '&:hover': {
        color: theme.palette.primary.main
      }
    },

    '& button': {
      fontSize: 12,
      textTransform: 'capitalize'
    }
  }
})

class Footer extends Component {
  render () {
    const { classes, style } = this.props
    return (
      <div className={classes.root} style={style}>
        <Container>
          <Typography variant="body2" color="inherit" noWrap>
            Created by <a href="https://github.com/maafaishal" target="_blank" rel="noopener noreferrer">@maafaishal</a>
          </Typography>
          <a href="https://github.com/maafaishal" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary">
            View on Github
            </Button>
          </a>
        </Container>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  style: PropTypes.any
}

export default withStyles(styles)(Footer)
