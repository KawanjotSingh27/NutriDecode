import Navbar from './navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './home.jsx';
import About from './about.jsx';
import Explore from './explore.jsx';
import Compare from './compare.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';
import Profile from './profile.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/compare" element={<Compare />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;