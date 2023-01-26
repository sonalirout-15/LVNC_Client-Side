import './App.css';
import { Route, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Auth/Login';
import Signup from './Components/Pages/Auth/Signup';
import ForgotPassword from './Components/Pages/Auth/ForgotPassword';
import Videos from './Components/Pages/Videos';
import Advertise from './Components/Header/Advertise';
import AboutUs from './Components/Header/AboutUs';
import WriteForUs from './Components/Header/WriteForUs';
import Event from './Components/Header/Event';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Search from './Components/Header/Search';
import LatestNewsData from './Components/Pages/LatestNewsData';
import LatestVideo from './Components/Pages/LatestVideos';
import Subcategory from './Components/Pages/Subcategory';
import SubcategoryData from './Components/Pages/SubcategoryData';
import ChildSubcategory from './Components/Pages/ChildSubcategory';
import MattersData from './Components/Pages/MattersData';

function App() {
  let location = useLocation();

  return (
    <div className="App">
      {
        location.pathname !== '/login' &&  location.pathname !=='/signup' && location.pathname !=='/forgot-password'  && <Navbar />
      }
      {
        location.pathname !== '/login' && location.pathname !=='/signup' && location.pathname !=='/forgot-password' && <Header />
      }
      
      <Route exact  path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route path='/signup' component={Signup}/>
      <Route path='/videos/:id' component={Videos}/>
      <Route path='/advertise' component={Advertise} />
      <Route path='/write-for-us' component={WriteForUs}/>
      <Route path='/about' component={AboutUs} />
      <Route path='/event' component={Event} />
      <Route path='/latestNews/:id' component={LatestNewsData}/>
      <Route path='/latestVideo/:id' component={LatestVideo} />
      <Route path='/./:category_name' component={Subcategory}/>
      <Route path='/subcategoryData/:id' component={SubcategoryData}/>
      <Route path='/childSubcategory/:id' component={ChildSubcategory}/>
      <Route path='/matters/:id' component={MattersData}/>
      <Route path='/contact' component={Contact} />
      <Route path='/search' component={Search}/> 
      {
        location.pathname !== '/login' && location.pathname !=='/signup' && location.pathname !=='/forgot-password' && location.pathname !=='/search' && <Footer />
      }

    </div>
  );
}


export default App;
