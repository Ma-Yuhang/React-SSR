import React from 'react'
import RouteApp from '@/router/RouteApp';
import { StaticRouter } from 'react-router-dom/server';

export default function App({location ,context}) {
  return (
    <StaticRouter location={location} context={context}>
      <RouteApp />
    </StaticRouter>
  )
}