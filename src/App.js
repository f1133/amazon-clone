import Header from './Header';
import Home from './Home';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch,Route }
 from 'react-router-dom';
 import Checkout from './Checkout';

 import firebase from './firebase';
 import Login from './Login';
function App() {
  return (
    
    <Router>
      {/* useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  }, []); */}
    <div className="App">
    <Header/>
    <Route path="/login">
  <Login />
</Route>
      <Route path="/">
     
      
      <Home/>
      </Route>
     
     <Route path="/chechout">
    
     <Checkout/>
     </Route>
     
    </div>
    </Router>

  );
}

export default App;
