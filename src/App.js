import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from 'react-router-dom';
import Start from './components/Start';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Translation Page</h1>
      </div>
      <Routes>
        <Route path='/' exact element={ <Start/> }/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
