import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import StartView from './view/StartView';
import TranslationView from './view/TranslationView';
import ProfileView from './view/ProfileView';



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <StartView/> } />
        <Route path='/translation' element={ <TranslationView/> } />
        <Route path='/profile' element={ <ProfileView/> } />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
