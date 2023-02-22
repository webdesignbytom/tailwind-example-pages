import { Routes, Route } from 'react-router-dom'
// Pages
import Home from './Home';
import ContactOne from './pages/contact/ContactOne';
import HeaderOne from './pages/headers/HeaderOne';
import LoginOne from './pages/login/LoginOne';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/contact-one' element={<ContactOne />} />
        <Route path='/login-one' element={<LoginOne />} />
        <Route path='/header-one' element={<HeaderOne />} />
      </Routes>
    </>
  );
}

export default App;
