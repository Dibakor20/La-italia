import logo from './logo.svg';
import './App.css';
import Menu from './Component/Menu/Menu';
import myStore from './Redux/Store';
import {Provider} from 'react-redux';

function App() {
  return (
    <>
    <Provider store={myStore}>
      <Menu/>
    </Provider>
   
    </>
  );
}

export default App;
