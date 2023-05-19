import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import Main from './components/Main';
import Posts from './components/Posts';
import Login from './components/Login';
import SingleNews from './components/SinglNews';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <nav className="menu">
          <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/">Main</NavLink>
          <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/about">Posts</NavLink>
          <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/contacts">Login</NavLink>
      </nav>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/about' element={<Posts />} />
          <Route path='/contacts' element={<Login />} />

          <Route path='/news/:id' element={<SingleNews />}/>

          <Route path='*' element={<h1>Not Found</h1>}/>

        </Routes>

    </div>
     </BrowserRouter>
  );
}

export default App;
