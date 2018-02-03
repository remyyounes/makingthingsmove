import React from 'react'
import ReactDOM from 'react-dom'
import { pageLoader, Stylegator } from 'stylegator'

const sections = [
  {
    title: 'Hello World',
    loader: pageLoader(() => import('./sections/hello-world.md')),
  },
]

ReactDOM.render(
  <Stylegator sections={sections} />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
