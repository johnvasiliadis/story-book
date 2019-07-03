import React from 'react'
import { Heading, Box } from "pcln-design-system";

const HeaderText = () => {
  return (
        <Box p={4}>
          <Heading fontSize={6} align="center" color="white">
            Kastoria Air Travel
          </Heading>
          <Heading fontSize={4} align="center" color="white">
            An Air Travel Theme
          </Heading>
          <Heading.h4 color="white">
            A fusion of an airport's API, Priceline's Design System (it's much, much more
            than CSS), and Storybook.
          </Heading.h4>
        </Box>
  )
}

export default HeaderText;
