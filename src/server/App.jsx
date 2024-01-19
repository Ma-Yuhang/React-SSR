import React from 'react'
import RouteApp from '@/routes/RouteApp';
import { StaticRouter } from 'react-router-dom';

export default function App({location ,context}) {
  return (
    <StaticRouter location={location} context={context}>
      <RouteApp />
    </StaticRouter>
  )
}