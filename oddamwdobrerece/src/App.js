import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './scss/main.scss';
import Home from "./Components/Home/Home";
import GiveAway from "./Components/GiveAway/GiveAway";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Logout from "./Components/Logout";
import Header from './Components/Header';
import Registered from './Components/Registered';
import firebaseData from './Components/firebaseData';



function App() {

    const [user, setUser] = useState('');

    useEffect(() => {
        firebaseData.auth().onAuthStateChanged(user => {
            if(user) {
                firebaseData.firestore().collection(`Users/${firebaseData.auth().currentUser.uid}/books`);
                setUser(user);
            } else {
                setUser('');
            }
        })
    });

    console.log(window.innerHeight);
    console.log(window.innerWidth);


    return (
        <div className="container">
            <Router>
                <Header user={user} setUser={setUser}/>

                <Switch>
                    <Route exact path="/">
                        <Home user={user}/>
                    </Route>
                    <Route exact path="/oddaj-rzeczy" component={GiveAway}/>
                    <Route exact path="/logowanie">
                        <Login />
                    </Route>
                    <Route exact path="/rejestracja" component={Register}/>
                    <Route exact path="/wylogowano" component={Logout}/>
                    <Route exact path="/zarejestrowano">
                        <Registered user={user} setUser={setUser}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
