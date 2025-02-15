'use client'

import SideNav from '../ui/transverse-components/SideNavigation'
import Box from '@mui/material/Box'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideNav />
      {children}
    </Box>
  )
}
