import React, { useState } from 'react';
import './App.css';
import { rental } from './Rentals';
import Header from '../components/Header';
import RentalCard from '../components/RentalCard';
import Login from '../components/Login'
import 'tachyons';

function App() {
    const [route, setRoute] = useState("Home");
    
    const onRouteChange = (newRoute) => {
        setRoute(newRoute)
    }

    console.log(rental);
    return ( 
        <div className = "App app-container" >
            <Header onRouteChange={onRouteChange}/>
            {
                route==="Rentals" ?
                <RentalCard rental = { rental }/> :
                <Login />
            }
        </div>
    );
}

export default App;