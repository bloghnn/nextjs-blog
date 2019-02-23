import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import htmr from 'htmr'

import {
  Typography
} from '@material-ui/core'

import Frame from 'components/frame'
import BlogList from 'components/blogList'
import BlogData from 'components/blogData.json'
import Container from 'components/container'
import Head from 'components/head'

const styles = theme => ({
  root: {
    paddingBottom: 30,

    '& .headline': {
      position: 'relative',
      borderRadius: 3,
      marginBottom: 30,

      '& img': {
        width: '100%',
        borderRadius: 3
      },

      '& .overlay': {
        position: 'absolute',
        width: '100%',
        height: '60%',
        background: 'linear-gradient(0deg, #fff, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.01))',
        bottom: 0,
        zIndex: 0
      },

      '& .title': {
        position: 'absolute',
        bottom: 10,
        left: 30,
        right: 30,
        fontSize: 36,
        fontWeight: 700,
        marginBottom: 15,
        lineHeight: 1.3,
        transition: 'color 0.3s ease',
        zIndex: 99,

        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },

    '& .box': {
      borderRadius: 3,
      backgroundColor: '#fff',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
      padding: '20px 50px'
    },

    [theme.breakpoints.down('sm')]: {
      '& .headline': {
        '& .title': {
          bottom: 10,
          left: '20px !important',
          fontSize: '30px !important'
        }
      },
      '& .box': {
        padding: '0px 20px'
      }
    },

    [theme.breakpoints.down('xs')]: {
      '& .headline': {
        margin: '0 -15px',

        '& .title': {
          fontSize: '22px !important'
        }
      },
      '& .box': {
        margin: '0 -15px'
      }
    }
  }
})

class Index extends React.Component {
  render () {
    const { classes } = this.props
    const headline = BlogData && BlogData.filter(data => data.headline === true)[0]
    return (
      <div>
        <Head />
        <Frame>
          <div className={classes.root}>
            <Container>
              <div className="headline">
                <a href={`detail/${headline.slug}`}>
                  <img src={headline.image} alt={headline.title} />
                  <div className="overlay" />
                  <Typography className="title" variant="h2" gutterBottom> {htmr(headline.title)} </Typography>
                </a>
              </div>
              <div className="box">
                {BlogData && BlogData.map((data, i) =>
                  <BlogList key={i} data={data} />
                )}
              </div>
            </Container>
          </div>
        </Frame>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
