import { h } from 'preact'
import { connect, Provider } from 'unistore/preact'
import { actions, store } from '@app/store'
import { Actions, State } from '@app/types'
import { Logo } from '@components/logo'
import { CounterComponent } from '@components/counter'
import '@styles/style.scss'

const Main = connect<{}, State & Actions, State & Actions>('count', actions)(
  ({ down, up, count }: State & Actions) => <div>
    <CounterComponent down={down} up={up} label={count} />
  </div>
)

export const App = () => (
  <Provider store={store}>
    <main>
      <p><Logo /></p>
      <Main />
    </main>
  </Provider>
)
