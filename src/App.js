import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from './components/Booking/Booking/Booking';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute';
import Login from './components/Login/Login';
import BookingList from './components/DashBoard/BookingList';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
       <Switch>
         <Route exact path="/">
          <Home/>
         </Route>
         <PrivateRoute exact path="/booking">
          <Booking/>
         </PrivateRoute>
         <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/movies">
            <BookingList/>
          </Route>
       </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
