import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Post from './Pages/Post/Post';
// import Ask from './Pages/Ask';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post/:id" element={<Post />} />
        {/* <Route path="/ask" element={<Ask />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
