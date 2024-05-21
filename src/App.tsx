import {FC, Suspense} from 'react'
import {Provider} from 'react-redux'
import {store} from './Redux/store'
import ThemeWrapper from './Config/ThemeWrapper'
import {FiLoader} from 'react-icons/fi'

const App: FC = () => {
  return (
    <Suspense fallback={<FiLoader />}>
      <Provider store={store}>
        <ThemeWrapper />
      </Provider>
    </Suspense>
  )
}

export default App
