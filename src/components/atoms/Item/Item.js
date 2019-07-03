import React from 'react'
import { Icon, Box, Text } from 'pcln-design-system'

const Item = ({flight}) => {
  return (
    <Box p={1} bg='blue'>
      <hr/>
      <Icon
        name='airplane'
        color='black'
      />
      <Text.span px={2}>Flight Direction: {flight.flightDirection}</Text.span>
      <Text.span px={2}>Flight Name: {flight.flightName}</Text.span>
      <Text.span px={2}>Aircraft Type: {flight.aircraftType.iataMain}</Text.span>
      <Text.span px={2}>Airline Code: {flight.airlineCode}</Text.span>
      <Text.span px={2}>Estimated Landing Time: {flight.lastUpdatedAt}</Text.span>
    </Box>
  )
}

export default Item
