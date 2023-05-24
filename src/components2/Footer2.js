import React from 'react'
import { Container,Typography,AppBar,Toolbar,MenuItem } from '@mui/material'
// import AspectRatio from "@mui/joy/AspectRatio";
import Stack from "@mui/material/Stack";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const pages = ['Home', 'About Us', 'Contact', 'Blogs', 'Login'];
const Footer2 = () => {
  return (
   <>
   <AppBar position='static' sx={{
          color: "white",
          background: "#978377",
        }}>
            <Container maxWidth="xl" sx={{my:3}}>
            <Toolbar disableGutters>
            <ShoppingBagIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Online Blogs
            </Typography>
            <Container sx={{ml:5}}>
            <Stack spacing={1} direction="column">
            {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Stack>
            </Container>
            </Toolbar>
            </Container>
   </AppBar>
   </>
  )
}

export default Footer2
