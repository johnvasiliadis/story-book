import React from "react";

function FlightList(props) {
  return (

      <div>
        <ul>
          {props.flights.map(flight => (
            <li key={flight.id}>
              Flight Direction: {flight.flightDirection}
              <br />
              Flight Name: {flight.flightName}
              <br />
              Aircraft Type: {flight.aircraftType.iataMain}
              <br />
              Airline Code: {flight.airlineCode}
              <br />
              Estimated Landing Time: <br /> {flight.estimatedLandingTime}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>

  );
}

export default FlightList;
