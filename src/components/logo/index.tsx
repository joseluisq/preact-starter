import { Component, h } from 'preact'
import logo from '@assets/images/logo.svg'
import './style.scss'

export class Logo extends Component {
  render () {
    return <a href='https://preactjs.com' target='_blank'>
      <img src={logo} />
    </a>
  }
}
