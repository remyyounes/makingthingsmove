import React from 'react'
import ReactDOM from 'react-dom'
import { pageLoader, Stylegator } from 'stylegator'
import Canvas from './components/Canvas'

const components = { Canvas }
const sections = [
  {
    title: 'Hello World',
    loader: pageLoader(() => import('./sections/hello.md')),
  },
  {
    title: 'Fill',
    loader: pageLoader(() => import('./sections/fill.md')),
  },
  {
    title: 'Stroke',
    loader: pageLoader(() => import('./sections/stroke.md')),
  },
]

ReactDOM.render(
  <Stylegator {...{ sections, components }} />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
