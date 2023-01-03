import './App.css';
import {  Route , useLocation } from 'react-router-dom';
import Login from './Components/Pages/Auth/Login';
import Signup from './Components/Pages/Auth/Signup';
import ForgotPassword from './Components/Pages/Auth/ForgotPassword';
import Home from './Components/Pages/Home';
import Videos from './Components/Pages/Videos';
import Advertise from './Components/Header/Advertise';
import AboutUs from './Components/Header/AboutUs';
import Event from './Components/Header/Event';
import Subcategory from './Components/Pages/Subcategory';
import Magazine from './Components/Pages/Magazine';
import WorldNews from './Components/Pages/WorldNews';
import Business from './Components/Pages/Business';
import Sports from './Components/Pages/Sports';
import Politics from './Components/Pages/Politics';
import Lifestyle from './Components/Pages/Lifestyle';
import LatestNews from './Components/Pages/LatestNews';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Search from './Components/Header/Search';

function App() {
  let location = useLocation()

  return (
    <div className="App">
      {
        location.pathname !== '/login' &&  location.pathname !=='/signup' && location.pathname !=='/forgot-password'  && <Navbar />
      }
      {
        location.pathname !== '/login' && location.pathname !=='/signup' && location.pathname !=='/forgot-password' && <Header />
      }
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route path='/signup' component={Signup}/>
      <Route path='./videos' component={Videos}/>
      <Route path='/advertise' component={Advertise} />
      <Route path='/about' component={AboutUs} />
      <Route path='/event' component={Event} />
      <Route path='/:category_name/:id' component={Subcategory}/>
      <Route path='/world news/:id' component={WorldNews}/>
      <Route path='/magazine/:id' component={Magazine} />
      <Route path='/business/:id' component={Business} />
      <Route path='/sports/:id' component={Sports} />
      <Route path='/politics/:id' component={Politics} />
      <Route path='/lifestyle/:id' component={Lifestyle} />
      <Route path='/latestNews/:id' component={LatestNews}/>
      <Route path='/contact' component={Contact} />
      <Route path='/search' component={Search}/>
      {
        location.pathname !== '/login' && location.pathname !=='/signup' && location.pathname !=='/forgot-password' && location.pathname !=='/search' && <Footer />
      }

    </div>
  );
}


export default App;
