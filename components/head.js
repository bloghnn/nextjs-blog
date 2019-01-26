import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultTitle = 'Nextjs Blog'
const defaultDescription = 'A blog created using Next.js'
const defaultOGURL = 'https://blog-nextjs.herokuapp.com/'
const defaultOGImage = '/static/next-bg.png'

const Head = props => (
  <NextHead>
    <title>{props.title ? props.title + ' - ' + defaultTitle : defaultTitle}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
    <link rel="mask-icon" href="/static/images/favicon.ico" />

    <link rel="canonical" href={props.url || defaultOGURL} />

    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:type" content={props.socialType || 'website'} />
    <meta property="og:site_name" content={props.siteName || ' '} />

    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta name="twitter:site" content={props.twitterCreator || ' '} />
    <meta name="twitter:creator" content={props.twitterCreator || ' '} />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  socialType: string,
  siteName: string,
  twitterCreator: string
}

export default Head
