import React from 'react';
import './App.css';
import { rental } from './Rentals';
import RentalCard from '../components/RentalCard';
import 'tachyons';

function App() {
  console.log(rental);
  return (
    <div className="App">
      <RentalCard rental={rental} />
    </div>
  );
}

export default App;
