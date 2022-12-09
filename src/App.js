import './App.css';
import {  Route , useLocation } from 'react-router-dom';
import Login from './Components/Pages/Auth/Login';
import Signup from './Components/Pages/Auth/Signup';
import Home from './Components/Pages/Home';
import Advertise from './Components/Header/Advertise';
import AboutUs from './Components/Header/AboutUs';
import Event from './Components/Header/Event';
import Magazine from './Components/Pages/Magazine';
import Business from './Components/Pages/Business';
import Sports from './Components/Pages/Sports';
import Art from './Components/Pages/Art';
import Politics from './Components/Pages/Politics';
import Travel from './Components/Pages/Travel';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  let location = useLocation()

  return (
    <div className="App">

      {
        location.pathname !== '/login' &&  location.pathname !=='/signup' && <Navbar />
      }
      {
        location.pathname !== '/login' && location.pathname !=='/signup' && <Header />
      }
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup}/>
      <Route path='/advertise' component={Advertise} />
      <Route path='/about' component={AboutUs} />
      <Route path='/event' component={Event} />
      <Route path='/magazine' component={Magazine} />
      <Route path='/business' component={Business} />
      <Route path='/sports' component={Sports} />
      <Route path='/art' component={Art} />
      <Route path='/politics' component={Politics} />
      <Route path='/travel' component={Travel} />
      <Route path='/contact' component={Contact} />
      {
        location.pathname !== '/login' && location.pathname !=='/signup' && <Footer />
      }

    </div>
  );
}


export default App;
