import React from 'react'
import ReactDOM from 'react-dom'
import { pageLoader, Stylegator } from 'stylegator'
import Canvas from './components/Canvas'
import Particle from './components/Particle'
import Art from './components/Art'
import Liquid from './components/Liquid'
import P5Wrapper from 'react-p5-wrapper';

const components = {
  Art,
  Canvas,
  Liquid,
  Particle,
  P5Wrapper,
}

const sections = [
  {
    title: 'Hello World',
    loader: pageLoader(() => import('./sections/hello.md')),
  },

  {
    title: 'Basics',
    sections: [
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
      {
        title: 'P5',
        loader: pageLoader(() => import('./sections/p5.md')),
      },
      {
        title: 'P5 WebGL',
        loader: pageLoader(() => import('./sections/p5webgl.md')),
      },
      {
        title: 'Rotation',
        loader: pageLoader(() => import('./sections/rotation.md')),
      },
      {
        title: 'Friction',
        loader: pageLoader(() => import('./sections/friction.md')),
      },
      {
        title: 'Gravity',
        loader: pageLoader(() => import('./sections/gravity.md')),
      },
      {
        title: 'Liquid',
        loader: pageLoader(() => import('./sections/liquid.md')),
      },
      {
        title: 'Spring',
        loader: pageLoader(() => import('./sections/spring.md')),
      },
    ]
  },
]

ReactDOM.render(
  <Stylegator {...{ sections, components }} />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
