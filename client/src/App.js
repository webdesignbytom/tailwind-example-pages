import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import ContactOne from './pages/contact/ContactOne';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/contact-one' element={<ContactOne />} />
      </Routes>
    </>
  );
}

export default App;
