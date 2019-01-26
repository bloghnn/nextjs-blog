import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import htmr from 'htmr'

import {
  Grid,
  Typography
} from '@material-ui/core'

const styles = theme => ({
  root: {
    padding: '25px 0',

    '& .image': {
      width: '100%',
      height: 200,
      overflow: 'hidden',

      '& img': {
        width: '100%'
      }
    },

    '& .title': {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 15,
      lineHeight: 1.3,
      transition: 'color 0.3s ease',

      '&:hover': {
        color: theme.palette.primary.main
      }
    },

    '& .description': {
      fontSize: 15,
      fontWeight: 400,
      marginBottom: 35
    },

    '& a': {
      color: theme.palette.primary.main
    }
  }
})

class BlogList extends Component {
  render () {
    const { classes, style, data } = this.props
    return (
      <div className={classes.root} style={style}>
        <Grid container spacing={24}>
          <Grid item md={5}>
            <a href={`/detail/${data.slug}`}>
              <div className="image">
                <img src={data.image} alt={`${data.title} image`} />
              </div>
            </a>
          </Grid>
          <Grid item md={7}>
            <a href={`/detail/${data.slug}`}>
              <Typography className="title" variant="h2" gutterBottom>
                {htmr(data.title)}
              </Typography>
            </a>
            <Typography className="description" variant="body2" gutterBottom>
              {htmr(data.description)}
            </Typography>
            <Typography className="from" variant="body2" gutterBottom>
              Source from: <a href={data.from.link} target="_blank" rel="noopener noreferrer">
                {data.from.name}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

BlogList.propTypes = {
  classes: PropTypes.object.isRequired,
  style: PropTypes.any,
  data: PropTypes.object
}

export default withStyles(styles)(BlogList)
