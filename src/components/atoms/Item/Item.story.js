import React from 'react'
import { storiesOf } from '@storybook/react'
import Item from './Item'

const prop = {
  flightDirection: 'A',
  flightName: 'HV5952',
  aircraftType: {iataMain: '73H', iataSub: '73H'},
  airlineCode: 164,
  estimatedLandingTime: '2019-04-27T00:18:57.000+02:00',
}

storiesOf('Item', module)
  .add('show Item List', () => <Item flight={prop}/>)

