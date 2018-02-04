import React from 'react'
import ReactDOM from 'react-dom'
import { pageLoader, Stylegator } from 'stylegator'
import Canvas from './components/Canvas'
import Particle from './components/Particle'
import Art from './components/Art'

const components = { Art, Canvas, Particle }
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
  {
    title: 'Particle',
    loader: pageLoader(() => import('./sections/particle.md')),
  },
]

ReactDOM.render(
  <Stylegator {...{ sections, components }} />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
