import { Provider } from 'react-redux';
import store from './app/redux/store';
import AppContainer from './app/index';

function App() {
  return (
    <Provider store={ store }>
      <AppContainer />
    </Provider>
  );
}

export default App;