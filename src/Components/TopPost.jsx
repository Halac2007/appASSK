import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const TopPost = (props) => {
  return (
    <>
      <Grid container spacing={2} maxWidth="1000px" m="auto">
        <Grid container item xs={8} spacing={4}>
          {props.toppost.map((item) => (
            <Grid key={item.title} item xs={12}>
              <Link href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                <img src={item.imagetop} width="100%" height="340px" alt="" />
                <Typography variant="h5">{item.title}</Typography>
              </Link>
            </Grid>
          ))}

          <Grid container item xs={12} spacing={2}>
            {props.catepost.map((item) => (
              <Grid item xs={4}>
                <Link href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="120px" alt="" />
                  <Typography variant="h6">{item.title}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          {props.mainmore.map((item) => (
            <Link href={item.link} sx={{ display: 'flex', textDecoration: 'none', color: '#212529' }}>
              <Box sx={{ paddingBottom: '10px' }}>
                <img src={item.image} width="100px" height="70px" alt="" />
              </Box>
              <Typography sx={{ paddingLeft: '10px', marginLeft: '10px' }}>{item.title}</Typography>
            </Link>
          ))}
        </Grid>
      </Grid>

      {/* <ListPost /> */}
    </>
  )
}

export default TopPost
