import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Start from './components/Start.js'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Translation Page</h1>
      </div>
      <Switch>
        <Route path='/' exact component={ Start }/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
