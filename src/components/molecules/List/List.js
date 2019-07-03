import React from 'react'
import Item from '../../atoms/Item'
import { Card, Heading} from 'pcln-design-system'

const List = ({flights}) => {
  return (
    <Card ><Heading m={3}>Flight Data</Heading>
       {
        flights.map((flight) => {
          return <Item flight={flight}/>
        })
       }
    </Card>
  )
}

export default List;