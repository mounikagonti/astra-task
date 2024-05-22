import {FC} from 'react'
import {Provider} from 'react-redux'

// Redux store 
import {store} from './Redux/store'

// Config
import ThemeWrapper from './Config/ThemeWrapper'

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeWrapper />
    </Provider>
  )
}

export default App
