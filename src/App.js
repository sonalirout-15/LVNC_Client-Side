import './App.css';
import { Route, useLocation } from 'react-router-dom';
import Login from './Components/Pages/Auth/Login';
import Signup from './Components/Pages/Auth/Signup';
import ForgotPassword from './Components/Pages/Auth/ForgotPassword';
import Home from './Components/Pages/Home';
import Videos from './Components/Pages/Videos';
import Advertise from './Components/Header/Advertise';
import AboutUs from './Components/Header/AboutUs';
import Event from './Components/Header/Event';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Search from './Components/Header/Search';
import LatestNewsData from './Components/Pages/LatestNewsData';
import Subcategory from './Components/Pages/Subcategory';
import ChildSubcategory from './Components/Pages/ChildSubcategory';
import MattersData from './Components/Pages/MattersData';

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
      <Route exact  path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route path='/signup' component={Signup}/>
      <Route path='/videos' component={Videos}/>
      <Route path='/advertise' component={Advertise} />
      <Route path='/about' component={AboutUs} />
      <Route path='/event' component={Event} />
      <Route path='/latestNewsData/:id' component={LatestNewsData}/> 
      <Route path='/:category_name' component={Subcategory}/>
      <Route path='/:id' component={ChildSubcategory}/>
      <Route path='/matters/:id' component={MattersData}/>
      {/* <Route path='/:id' component={ChildSubcategory}/> */}
      {/* <Route path='/childSubcategoryData/:data' component={ChildSubcategoryData}/> */}
      {/* <Route path='/latestNews' component={LatestNews}/>   */}
      <Route path='/contact' component={Contact} />
      <Route path='/search' component={Search}/>
      {
        location.pathname !== '/login' && location.pathname !=='/signup' && location.pathname !=='/forgot-password' && location.pathname !=='/search' && <Footer />
      }

    </div>

    // <Router>
    //   <Switch>
    //     <Route path='/'>
    //       <Home />
    //     </Route>
    //     <Route path='/login'>
    //       <Login />
    //     </Route>
    //     <Route path="/forgot-password">
    //       <ForgotPassword />
    //     </Route>
    //     <Route path="/signup">
    //       <Signup />
    //     </Route>
    //     <Route path="/videos">
    //       <Videos />
    //     </Route>
    //     <Route path="/advertise">
    //       <Advertise />
    //     </Route>
    //     <Route path="/event">
    //       <AboutUs />
    //     </Route>
    //     <Route path="/:category_name/:id">
    //       <Event />
    //     </Route>
    //     <Route path="/childSubcategoryData/:data">
    //       <Subcategory />
    //     </Route>
    //     <Route path="/latestNews/:id">
    //       <ChildSubcategoryData />
    //     </Route>
    //     <Route path="/contact">
    //       <LatestNews />
    //     </Route>
    //     <Route path="/search">
    //       <ForgotPassword />
    //     </Route>
    //   </Switch>
    // </Router >
  );
}


export default App;
