import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='profile' element={ <Profile />} />
            <Route path='messages' element={ <Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
