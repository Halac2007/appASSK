import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AppBar, Box, Grid, Link, Toolbar, Typography } from '@mui/material'
import { Container, display } from '@mui/system'

const DataPost = () => {
  const [mainPosts, setMainPosts] = useState([])

  useEffect(() => {
    const url = `https://crawlassk.herokuapp.com/`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.photo,
      }))
      setMainPosts(data.slice(5))
    })
  }, [])
  return (
    <>
      <AppBar position="static" sx={{ background: '#fff', borderBottom: '1px solid #ede7f6', height: 50 }}>
        <Container maxWidth="lg">
          <Toolbar to="/">
            <Link>
              <img src="https://static-znews.zadn.vn/images/logo-zing-home.svg" alt="" height={'30px'} />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Box maxWidth="1000px" m="auto" p={'5rem'}>
        {mainPosts.map((item) => (
          <a href={item.link} key={item.title}>
            <Grid container spacing={2} sx={{ display: 'flex', borderBottom: '1px solid #ede7f6', padding: '10px' }}>
              <Grid item xs={8}>
                <Typography>{item.title}</Typography>
              </Grid>
              <Grid item xs={4}>
                <img src={item.image} alt="" height={'100px'} width={'50%'} />
              </Grid>
            </Grid>
          </a>
        ))}
      </Box>
    </>
  )
}

export default DataPost
