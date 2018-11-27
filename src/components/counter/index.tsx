import { Component, h } from 'preact'
import { Button, Counter, Label, State } from '@app/types'
import './style.scss'

export class CounterLabel extends Component<Label> {
  render ({ count }: Label) {
    return <h1>{count}</h1>
  }
}

export class CounterButton extends Component<Button> {
  render ({ label, disabled, action }: Button) {
    return <button onClick={action} disabled={disabled}>{label}</button>
  }
}

export class CounterComponent extends Component<Counter, State> {
  render ({ down, up, count }: Counter) {
    return (
      <div>
        <CounterLabel count={count} />
        <CounterButton action={down} label='-' disabled={count <= 0} />
        <CounterButton action={up} label='+' />
      </div>
    )
  }
}
