import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { MDBSpinner } from 'mdb-react-ui-kit';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Auth/Login';
import Signup from './Components/Pages/Auth/Signup';
import ForgotPassword from './Components/Pages/Auth/ForgotPassword';
import ChangePassword from './Components/Pages/Auth/ChangePassword';
import ResetPassword from './Components/Pages/Auth/ResetPassword';
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
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  let location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
              <MDBSpinner grow style={{ width: '10rem', height: '10rem' , color:'#032a63', alignItems:'center'}}>
                  <span className='visually-hidden'>Loading...</span>
              </MDBSpinner>
      ) : (
        <>
      {
        location.pathname !== '/login' &&  location.pathname !=='/signup' && location.pathname !=='/forgot-password'  && location.pathname !== '/change-password' && location.pathname !== '/reset-password' && <Navbar />
      }
      {
        location.pathname !== '/login' && location.pathname !=='/signup' && location.pathname !=='/forgot-password' && location.pathname !== '/change-password' && location.pathname !== '/reset-password' && <Header />
      }
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/forgot-password'>
        <ForgotPassword />
      </Route>
      <Route path='/change-password'>
        <ChangePassword />
      </Route>
      <Route path='/reset-password'>
        <ResetPassword />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/videos/:id'>
        <Videos />
      </Route>
      <Route path='/advertise'>
        <Advertise />
      </Route>
      <Route path='/write-for-us'>
        <WriteForUs />
      </Route>
      <Route path='/about'>
        <AboutUs />
      </Route>
      <Route path='/event'>
        <Event />
      </Route>
      <Route path='/latestNews/:id'>
        <LatestNewsData/>
      </Route>
      <Route path='/latestVideo/:id'>
        <LatestVideo />
      </Route>
      <Route path='/./:category_name'>
        <Subcategory />
      </Route>
      <Route path='/subcategoryData/:id'>
        <SubcategoryData />
      </Route>
      <Route path='/childSubcategory/:id'>
        <ChildSubcategory />
      </Route>
      <Route path='/matters/:id'>
        <MattersData />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/search'>
        <Search />  
      </Route> 
      </Switch>
      {
        location.pathname !== '/login' && location.pathname !=='/signup' && location.pathname !=='/forgot-password' && location.pathname !== '/change-password' && location.pathname !== '/reset-password' && location.pathname !=='/search' && <Footer />
      }
        </>
      )}

    </div>
  );
}


export default App;
