import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import "./global.css"

import { router } from './routes';

import { Sidebar } from './components/Sidebar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />

      <div className='content'>
        <RouterProvider router={router} />
      </div>

    </div>
  </React.StrictMode>,
)
