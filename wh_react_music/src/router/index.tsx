import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Recommand = lazy(() => import('@/views/discover/c-views/recommand'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Album = lazy(() => import('@/views/discover/c-views/album'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const DjRadio = lazy(() => import('@/views/discover/c-views/djradio'))

const Download = lazy(() => import('@/views/download'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommand" />
      },
      {
        path: '/discover/recommand',
        element: <Recommand />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djRadio',
        element: <DjRadio />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  }
]

export default routes
