import { h, render } from 'preact'
import { App } from './app'

const mountNode = document.getElementById('root') as HTMLElement

render(<App />, mountNode, mountNode.lastChild as HTMLElement)

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker' + '.js')
    .then((registration) => console
      .log('Service Worker registration successful with scope: ', registration.scope))
    .catch((err) => console
      .log('Service Worker registration failed: ', err))
  }
}
