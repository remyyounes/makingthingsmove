import React from 'react'
import ReactDOM from 'react-dom'
import { pageLoader, Stylegator, useCustomPartials } from 'stylegator'

// TODO: fix defaultProps on stylegator
const partials = useCustomPartials({})
const sections = [
  {
    title: 'Hello World',
    loader: pageLoader(() => import('./sections/hello.md')),
  },
]

ReactDOM.render(
  <Stylegator {...{ sections, partials }} />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
