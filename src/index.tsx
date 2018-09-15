import { h, render } from 'preact'
import App from './app'

const mountNode = document.getElementById('root') as HTMLElement

render(<App />, mountNode, mountNode.lastChild as HTMLElement)
