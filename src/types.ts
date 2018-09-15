export interface State {
  count: number
}

export interface Actions {
  down (): void
  up (): void
}

export interface Label {
  label: number | string
}

export interface Button extends Label {
  disabled?: boolean
  action (): void
}

export interface Counter extends Actions, Label {}
