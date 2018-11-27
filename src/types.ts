export interface State {
  count: number
}

export interface Actions {
  down (): void
  up (): void
}

export interface Label {
  count: number
}

export interface Button {
  disabled?: boolean
  label: string
  action (): void
}

export interface Counter extends Actions, State {}
