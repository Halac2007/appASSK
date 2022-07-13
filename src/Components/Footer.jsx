import { Box, Toolbar } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ background: '#bcb4b4ab', paddingTop: 2, height: '200px' }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          lineHeight: 1.5,
        }}
      >
        <Box>
          <img src="https://static-cms-plo.zadn.vn/v3/web/styles/img/logo.png" alt="" height={'30px'} />
        </Box>
      </Toolbar>
    </Box>
  )
}

export default Footer
