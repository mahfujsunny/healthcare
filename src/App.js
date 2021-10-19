
import './App.css';
import {
  BrowserRouter  as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Services from './Pages/Services/Services';
import Home from './Pages/Home/Home';
import Abouts from './Pages/Abouts/Abouts';
import Doctors from './Pages/Doctors/Doctors';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import BookDoctor from './Pages/BookDoctor/BookDoctor';
import Details from './Pages/Details/Details';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
            <Router>
              <Header></Header>
                <Switch>
                  <Route exact path="/">
                      <Home></Home>
                  </Route>
                  <Route exact path="/home">
                      <Home></Home>
                  </Route>
                  <Route exact path="/services">
                      <Services></Services>
                  </Route>
                  <PrivateRoute exact path="/details/:serviceid">
                      <Details></Details>
                  </PrivateRoute>
                  <Route exact path="/about">
                      <Abouts></Abouts>
                  </Route>
                  <Route exact path="/doctors">
                      <Doctors></Doctors>
                  </Route>
                  <PrivateRoute exact path="/bookDoctor/:doctorid">
                      <BookDoctor></BookDoctor>
                  </PrivateRoute>
                  <Route exact path="/login">
                      <Login></Login>
                  </Route>
                  <Route path="*">
                      <NotFound></NotFound>
                  </Route>
                </Switch>
              <Footer></Footer>
            </Router>
      </AuthProvider>      
    </div>
  );
}

export default App;
