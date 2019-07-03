import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// import { render } from "react-dom";
// import { makeData, Logo, Tips } from "./Utils";

// Import React Table

// import ReactTable from "react-table";
// import "react-table/react-table.css";

class GrabFlights extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
      loading: true,
      error: null
      // data: makeData()
    };
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     data: makeData()
  //   };
  // }

  componentDidMount() {
    // axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)

    const auth = {
      headers: {
        Accept: "application/json",
        app_id: "8f89c2df",
        app_key: "22bde314f165889f9841a9064859eaca",
        ResourceVersion: "v4"
      }
    };

    axios
      .get("https://api.schiphol.nl/public-flights/flights", auth)
      .then(res => {
        // console.log(res.data)
        // Transform the raw data by extracting the nested posts
        // const posts = res.data.data.children.map(obj => obj.data);
        const flights = res.data.flights.map(obj => obj);

        console.log("flights--->   ", flights);

        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          flights,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return <div>Error: {this.state.error.message}</div>;
  }

  renderFlights() {
    if (this.state.error) {
      return this.renderError();
    }

    // const { data } = this.state;

    // <li key={flight.airlineCode}>{flight.flightName}</li>

    return (
      <div>
        <ul>
          {this.state.flights.map(flight => (
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
              Terminal: {flight.terminal}
              <br />
            </li>
          ))}
        </ul>

        {/*    <div>
         <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div> */}
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* <h1>{`/r/${this.props.subreddit}`}</h1> */}
        {this.state.loading ? this.renderLoading() : this.renderFlights()}
      </div>
    );
  }
}

// ReactDOM.render(
//   <GrabFlights subreddit="reactjs" />,
//   document.getElementById("root")
// );
// <GrabFlights flights="reactjs" />,

ReactDOM.render(<GrabFlights />, document.getElementById("root"));
