import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Covid from './pages/Covid/Covid';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Home/Footer/Footer'
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import MedicneDetails from './pages/MedicineDetails/MedicneDetails';
import NotFound from './pages/NotFound/NotFound'
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import OnlineDoctor from './pages/OnlineDoctor/OnlineDoctor';

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
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/covid">
              <Covid></Covid>
            </PrivateRoute>
            <PrivateRoute exact path="/doctor">
              <OnlineDoctor></OnlineDoctor>
            </PrivateRoute>
            <PrivateRoute exact path="/home/:detailId">
              <MedicneDetails></MedicneDetails>
            </PrivateRoute>

            <Route exact path="*">
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
