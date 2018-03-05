import React from 'react'
import ReactDOM from 'react-dom'
import P5Wrapper from 'react-p5-wrapper'
import * as P from 'p5/lib/addons/p5.dom.js'
import p5 from 'p5'
import * as R from 'ramda'
import { pageLoader, Stylegator } from 'stylegator'
import Canvas from './components/Canvas'
import Particle from './components/Particle'
import Art from './components/Art'
import Liquid from './components/Liquid'
import Oscilation from './components/Oscilation'
import Tree from './components/Tree'

const components = {
  Art,
  Canvas,
  Liquid,
  Oscilation,
  P5Wrapper,
  Particle,
  R,
  Tree,
  Vector: p5.Vector,
}

const sections = [
  {
    title: 'Introduction',
    loader: pageLoader(() => import('./sections/introduction.md')),
  },
  {
    title: 'Canvas Basics',
    sections: [
      {
        title: 'Hello Canvas',
        loader: pageLoader(() => import('./sections/hello.md')),
      },
      {
        title: 'Primitives',
        loader: pageLoader(() => import('./sections/primitives.md')),
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
        title: 'Motion',
        loader: pageLoader(() => import('./sections/motion.md')),
      },
    ],
  },
  {
    title: 'Animation',
    sections: [
      {
        title: 'Particle',
        loader: pageLoader(() => import('./sections/particle.md')),
      },
      {
        title: 'Gravity',
        loader: pageLoader(() => import('./sections/gravity.md')),
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
        title: 'Collision',
        loader: pageLoader(() => import('./sections/collision.md')),
      },
      {
        title: 'Collision Performance',
        loader: pageLoader(() => import('./sections/collision-perf.md')),
      },
      {
        title: 'Friction',
        loader: pageLoader(() => import('./sections/friction.md')),
      },

      {
        title: 'Liquid',
        loader: pageLoader(() => import('./sections/liquid.md')),
      },
      {
        title: 'Spring',
        loader: pageLoader(() => import('./sections/spring.md')),
      },
      {
        title: 'Oscillation',
        loader: pageLoader(() => import('./sections/oscillation.md')),
      },
      {
        title: 'Oscillation2',
        loader: pageLoader(() => import('./sections/oscillation2.md')),
      },
      {
        title: 'Fractal Tree',
        loader: pageLoader(() => import('./sections/tree.md')),
      },
    ],
  },
  {
    title: 'Flock',
    sections: [
      {
        title: 'Intro',
        loader: pageLoader(() => import('./sections/flock.md')),
      },
      {
        title: 'Boid',
        loader: pageLoader(() => import('./sections/flock-boid.md')),
      },
      {
        title: 'Wrapping',
        loader: pageLoader(() => import('./sections/flock-boid-wrap.md')),
      },
      {
        title: 'Separation',
        loader: pageLoader(() => import('./sections/flock-separation.md')),
      },
      {
        title: 'Alignment',
        loader: pageLoader(() => import('./sections/flock-alignment.md')),
      },
      {
        title: 'Cohesion',
        loader: pageLoader(() => import('./sections/flock-cohesion.md')),
      },
    ],
  },
  {
    title: 'Notes',
    loader: pageLoader(() => import('./sections/notes.md')),
  },
]

ReactDOM.render(
  <Stylegator {...{ sections, components }} />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
