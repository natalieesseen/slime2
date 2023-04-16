import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function emptyFunction() {}
// define slime2 defaults in case the user didn't define them
slime2Chat ||= {
  onMessage: emptyFunction,
  onDelete: emptyFunction,
  ready: emptyFunction,
}
slime2Chat.onMessage ||= emptyFunction
slime2Chat.onDelete ||= emptyFunction
slime2Chat.ready ||= emptyFunction

slime2Login ||= {}

slime2Setup ||= {
  permissions: [],
}
slime2Setup.permissions ||= []

const root = ReactDOM.createRoot(
  document.getElementById('slime2-root') as HTMLElement,
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
