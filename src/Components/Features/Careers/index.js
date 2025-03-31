import { Box } from '@mui/material'
import React from 'react'
import CareersBanner from './Banner'
import CareersDetails from './Details'
import OurOpeningsComponent from './OurOpenings'
import { BottomBanner } from './BottomBanner'

export const CareersComponent = () => {
  return (
    <Box>
        <CareersBanner/>
        <CareersDetails/>
        <OurOpeningsComponent/>
        <BottomBanner/>
    </Box>
  )
}
