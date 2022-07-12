import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AppBar, Box, Grid, Link, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Header from '../Components/Header'
import TopPost from '../Components/TopPost'

const DataPost = () => {
  const [mainPosts, setMainPosts] = useState([])
  const [mainTopPosts, setTopMainPosts] = useState([])
  const [mainCatePosts, setCatePosts] = useState([])
  const [MorePosts, setMorePosts] = useState([])
  useEffect(() => {
    const url = `https://crawlassk.herokuapp.com/`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
      }))
      setMainPosts(data.slice(16))
      setTopMainPosts(data.slice(4, 5))
      setCatePosts(data.slice(6, 9))
      setMorePosts(data.slice(9, 16))
    })
  }, [])
  return (
    <Box sx={{ backgroundColor: 'rgb(247, 247, 247)' }}>
      <Header />

      <TopPost toppost={mainTopPosts} catepost={mainCatePosts} maincate={mainPosts} mainmore={MorePosts} />
    </Box>
  )
}

export default DataPost
