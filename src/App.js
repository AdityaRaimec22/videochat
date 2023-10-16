import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LobbyScreen from './screens/Lobby';
import RoomPage from './screens/Room';
// import SocketProvider from './context/SocketProvider';

function App() {
  return (
    // <SocketProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LobbyScreen />} />
          <Route path='/room/:roomId' element = {<RoomPage/>}></Route>
        </Routes>
      </div>
    </Router>
    // </SocketProvider>
  );
}

export default App;
