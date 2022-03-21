import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from 'react-router-dom';
import StartView from './view/StartView';
import NotFoundView from './view/NotFoundView';
import TranslationView from './view/TranslationView';
import ProfileView from './view/ProfileView';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <StartView/> } />
        <Route path='/translation' element={ <TranslationView/> } />
        <Route path='/profile' element={ <ProfileView/> } />
        <Route path='*' element={ <NotFoundView/> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
