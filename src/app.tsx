import { h } from 'preact'
import { connect, Provider } from 'unistore/preact'
import { actions, store } from '@app/store'
import { Actions, State } from '@app/types'
import { Logo } from '@components/logo'
import { CounterComponent } from '@components/counter'
import '@styles/style.scss'

const Counter = connect<{}, {}, State & Actions>('count', actions)(
  (props: State & Actions) => <CounterComponent {...props} />
)

export const App = () => (
  <Provider store={store}>
    <div>
      <p><Logo /></p>
      <Counter />
    </div>
  </Provider>
)
