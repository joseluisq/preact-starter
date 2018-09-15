import createStore, { Store } from 'unistore'
import devtools from 'unistore/devtools'
import { State } from '@app/types'

const initialState = { count: 0 }

export const store = process.env.NODE_ENV === 'production' ?
  createStore(initialState) : devtools(createStore(initialState))

export function actions (store: Store<State>) {
  return {
    up (state: State) {
      store.setState({ count: state.count + 1 })
    },

    down (state: State) {
      store.setState({ count: state.count - 1 })
    }
  }
}
