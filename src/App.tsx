import  { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import ThemeWrapper from './Config/ThemeWrapper';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeWrapper />
    </Provider>
  );
};

export default App;