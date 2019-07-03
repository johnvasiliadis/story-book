import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';


const props = {
    flights : [{
    flightDirection: 'A',
    flightName: 'HV5954',
    aircraftType: {iataMain: '78H', iataSub: '78H'},
    airlineCode: 168,
    estimatedLandingTime: '2019-04-27T00:18:57.000+02:00',
  },
  {
    flightDirection: 'A',
    flightName: 'HV5952',
    aircraftType: {iataMain: '73H', iataSub: '73H'},
    airlineCode: 164,
    estimatedLandingTime: '2019-04-27T00:18:57.000+02:00',
  }]
}

storiesOf('List', module)
  .add('show List', () => <List {...props}/>)

