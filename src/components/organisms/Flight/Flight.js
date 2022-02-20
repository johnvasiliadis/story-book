import React, { Component } from "react";
import axios from "axios";
import List from "../../molecules/List";
import { Box, Input, Label } from "pcln-design-system";

class Flight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
      loading: true,
      error: null,
      searchDate: new Date().toISOString().substr(0, 10)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getData = () => {
    const auth = {
      headers: {
        Accept: "application/json",
        app_id: "8f89c2df",
        app_key: "d6d1444bc029e94df86bc7f13acd9da8",
        ResourceVersion: "v4"
      }
    };

    // Feb 2022 observation -- I think they got rid of the search date.
    let params =
      "scheduleDate=" +
      this.state.searchDate +
      "&includedelays=false&page=0&sort=%2BscheduleTime";

    axios
      .get(`https://api.schiphol.nl/public-flights/flights?${params}`, auth)
      .then(res => {
        const flights = res.data.flights.map(obj => obj);

        this.setState({
          flights,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return <div>Error: {this.state.error.message}</div>;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getData();
  }

  handleChange = event => {
    const query = event.target.value;
    this.setState({
      searchDate: query
    });
  };

  renderFlights() {
    if (this.state.error) {
      return this.renderError();
    }
    console.log("flights", this.state.flights);
    return (
      <Box py={2}>
        <form onSubmit={this.handleSubmit}>
          <Box width={1/4} py={2}>
            <Label htmlFor="searchDate">Search by Date:</Label>
            <Input type="date" name="searchDate" onChange={this.handleChange} />
          </Box>
          <Box width={1/4} py={2}>
            <Input type="submit" value="Search" placeholder="YYYY-MM-DD" />
          </Box>
        </form>

        <List flights={this.state.flights} />
      </Box>
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ? this.renderLoading() : this.renderFlights()}
      </div>
    );
  }
}

export default Flight;
