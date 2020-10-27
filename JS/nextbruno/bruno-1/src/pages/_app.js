import React from 'react'
import Head from 'next/head'
import {ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '@utils/theme'


export default function MyApp(props) {
  const {Component, pageProps} = props

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}