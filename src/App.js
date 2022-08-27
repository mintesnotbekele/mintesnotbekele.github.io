
import Base from './components/base';
import About from './components/about/about'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Service from './components/service/service';
import Contact from './components/contactus/contact';

function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route exact path='/' element={< Base />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/service' element={< Service />}></Route>
        <Route exact path='/contact' element={< Contact/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;

