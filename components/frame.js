import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import {
// Hidden
} from '@material-ui/core'

import Header from 'components/header'
import Footer from 'components/footer'

const styles = theme => ({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    position: 'relative',
    '& a': {
      'textDecoration': 'none'
    },

    '& ol, & li, & ul': {
      fontFamily: 'Montserrat'
    },

    '& h1, & h2, & p': {
      color: '#333'
    }
  },
  loading: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class Frame extends Component {
  state = {
    loadingScreen: true
  }

  componentDidMount () {
    this.setState({ loadingScreen: false })
  }

  render () {
    const { children, classes } = this.props
    const { loadingScreen } = this.state

    return (
      !loadingScreen &&
      <div className={classes.root}>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Frame)
