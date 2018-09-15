import { Component, h } from 'preact'
import { Button, Counter, Label, State } from '@app/types'
import './style.scss'

export class CounterLabel extends Component<Label> {
  render ({ label }: Label) {
    return <h1>{label}</h1>
  }
}

export class CounterButton extends Component<Button> {
  render ({ label, disabled, action }: Button) {
    return <button onClick={action} disabled={disabled}>{label}</button>
  }
}

export class CounterComponent extends Component<Counter, State> {
  render ({ label, down, up }: Counter, { count }: State) {
    return <div>
    <CounterLabel label={label} />
    <CounterButton action={down} label='-' disabled={count <= 0} />
    <CounterButton action={up} label='+' />
    </div>
  }
}
