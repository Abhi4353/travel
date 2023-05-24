import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BACkEND_URL } from "./config";
import AspectRatio from "@mui/joy/AspectRatio";
import { Typography } from "@mui/material";
import { ImageList, ImageListItem, ImageListItemBar,Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination';
import usePagination from "./Pagination";

const Products2 = () => {
  const [products, setProducts] = useState([]);
  // const [start, setStart] = useState(0);
  // const [complete, setComplete] = useState(4);
  // const [display] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const PER_PAGE = 4;
  const Data = usePagination(products, PER_PAGE) 
   

  const getproductdata = async () => {
    const res = await axios.get(`${BACkEND_URL}/posts`);
    setCount(Math.ceil(res.data.length/PER_PAGE))
    setProducts(res.data)
  };

  // const setnextproducts = () => {
  //   if (complete > count) {
  //     setStart(start)
  //     setComplete(complete)
  //   } else {
  //     setStart(start + 4)
  //     setComplete(complete + 4)
  //   }
  // };

  // const setprevproducts = () =>{
  //   if(start <= 0){
  //       setStart(0)
  //       setComplete(4)
  //   }
  //   else {
  //       setStart(start - 4)
  //       setComplete(complete -4)
  //   }
  // }
    const handlechange = (event, value) => {
      setPage(value);
      Data.jump(value);
    }


  useEffect(() => {
    getproductdata();
  }, [ ]);
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          display: { xs: "flex", md: "flex" },
          justifyContent: "center",
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "#d85454",
          background: "white",
          textDecoration: "none",
        }}
      >
        Blogs
      </Typography>
      <Container maxWidth="xl" sx={{my:5}}>
      <ImageList sx={{ width: "auto", height: "auto" }}>
        {Data.currentData().map((ele, key) => (
          <ImageListItem key={ele.image}>
            <AspectRatio sx={{ width: 600 }}>
              <img
                src={`${BACkEND_URL}/uploads/${ele.image}?w=248&fit=crop&auto=format`}
                srcSet={`${BACkEND_URL}/uploads/${ele.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={ele.Title}
                loading="lazy"
                sx={{ mt: 3 }}
              />
            </AspectRatio>
            <ImageListItemBar
              title={ele.Title}
              subtitle={<span>by: {ele.Body.slice(0, 50)}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* {display ?<Stack spacing={2} direction="row">
        <Button variant="contained" onClick={setprevproducts}>Previous</Button>
        <Button variant="contained" onClick={setnextproducts}>
          Next
        </Button>
      </Stack> : ""} */}
      <Container sx={{display: "flex", justifyContent: "center"}}>
      <Stack spacing={2}>
      <Pagination count={count} page={page} variant="outlined" shape="rounded" onChange={handlechange} />
      </Stack>
      </Container>
   
      </Container>
      
    </>
  );
};

export default Products2;
