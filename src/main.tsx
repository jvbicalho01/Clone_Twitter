import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sparkle } from "@phosphor-icons/react";

import "./global.css"

import { Sidebar } from './components/Sidebar';
import { Tweet } from './components/Tweet';
import { Header } from './components/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />

      <div className='content'>
        <main className='timeline'>
          <Header title="Home"/>

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/jvbicalho01.png" alt="João Vítor Bicalho" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <div className='saparator' />

          <Tweet />
          <Tweet />
        </main>
      </div>

    </div>
  </React.StrictMode>,
)
