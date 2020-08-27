import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { rental } from "./Rentals";
import Header from "../components/Header";
import RentalCard from "../components/RentalCard";
import Login from "../components/Login";
import Register from "../components/Register";
import "tachyons";

import { setSearchFieldRentals, requestRentals } from "../actions";

const mapStateToProps = state => {
    return {
        searchFieldRentals: state.searchRentals.searchFieldRentals,
        rentals: state.requestRentals.rentals,
        isPending: state.requestRentals.isPending,
        error: state.requestRentals.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChangeRentals: (event) => dispatch(setSearchFieldRentals(event.target.value)),
        onRequestRentals: () => dispatch(requestRentals())
    }
}
/* Need to implement something like this below to get the rental properties. Maybe useEffect?
componentDidMount() { 
    props.onRequestRentals();
}
*/
const App = (props) => {
  const [route, setRoute] = useState("Rentals");

  const onRouteChange = (newRoute) => {
    setRoute(newRoute);
  };

  const { searchFieldRentals, onSearchChangeRentals, rentals, isPending, error} = props;
  console.log(searchFieldRentals);
  return (
    <div className="App app-container">
      <Header onRouteChange={onRouteChange} />
      {route === "Rentals" ? (
        <RentalCard rental={rental} />
      ) : route === "Register" ? (
        <Register />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
