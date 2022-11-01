import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      <Route path='./components/Home'>
        <Home />
      </Route>
      <Route path='./components/Movies'>
        <Movies />
      </Route>
      <Route path='./components/Stocks'>
        <Stocks />
      </Route>
    </div>
  );
}

export default App;