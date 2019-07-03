import React from 'react'
import ReactDOM from 'react-dom'
import FlightList from './components/organisms/Flight'
import Header from './components/organisms/Header'
import { ThemeProvider } from 'pcln-design-system'


class GrabFlights extends React.Component {

  render() {
    return (
      <div>
      <ThemeProvider>
        <Header />
       <FlightList />
       </ThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(<GrabFlights />, document.getElementById('root'))
