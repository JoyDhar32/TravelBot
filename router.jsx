import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './src/App';
import CreateTrip from './src/createTrip/index';
import Viewtrip from './src/view-trip/[tripId]/index.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/create-trip',
      element: <CreateTrip />,
    },
    {
      path:'/view-trip/:tripId',
      element:<Viewtrip />
    }
  ])

export default router;