import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'
const theme = {
  primary: 'green',
}


export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}