




import './App.css';
import Nav from "./components/nav/Nav";
import { Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Topnav from './components/nav/Topnav';
import Productsdetails from './components/pages/Productsdetails';
import Create from './components/pages/Create';
import Dashboard from './components/pages/Dashboard';
import Edit from './components/pages/Edit';
import Footer from './components/footer/Footer';
import About from './components/pages/About';



function App() {
  return (
    <>
    
  <Topnav/>
<Nav/>   
    
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/product_details/:id' element={<Productsdetails/>}/>
  <Route path='/create' element={<Create/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/update/:id' element={<Edit/>}/>

  </Routes>
<Footer/>


      
    </>
    
  );
}

export default App;
