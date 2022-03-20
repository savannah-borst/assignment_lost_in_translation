import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from 'react-router-dom';
import Start from './components/Start/Start';
import NotFound from './components/NotFound/NotFound';
import Translation from './components/Translation/Translation';
import Profile from './components/Profile/Profile';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Translation Page</h1>
      </div>
      <Routes>
        <Route path='/' exact element={ <Start/> } />
        <Route path='/translation' element={ <Translation/> } />
        <Route path='/profile' element={ <Profile/> } />
        <Route path='*' element={ <NotFound/> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
