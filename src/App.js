import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';

function App(props) {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='profile' element={<Profile state={props.state.profilePage}
            dispatch={props.dispatch} />} />
          <Route path='messages/*' element={<Messages state={props.state.messagesPage}
            dispatch={props.dispatch} />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
