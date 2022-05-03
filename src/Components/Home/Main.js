import React from "react";
import "../../App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { List, Typography } from "@mui/material";
import { Email, Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  background: "transparent",
}));

const Home = () => {
  return (
    <section className="home pb-4">
      <Box sx={{ flexGrow: 1 }} className="mt-3 pt-5">
        <div
          className="container 
        "
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item className="shadow-none ms-5 border-none ">
                <img src={require("../images/img1.png")} alt="" />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item className=" mt-4 pt-5  ">
                <Typography variant="h3" component="h3" mt={5} >
                  <span className="text-danger ">Abrar </span>
                  Muthanna Rakea
                </Typography>
                <Typography variant="h5" className="fw-bold text-center me-5 pe-2 text-secondary">
                  Front End Developer
                </Typography>
                <List className="text-decoration-none">
                  <Item className="text-center  me-5 pe-1">
                    <a href="."><Email  className="text-danger"/>  </a>
                   <a href="."><LinkedIn /></a>
                    <a href="/">   
                      <Instagram />
                    </a>
                    <a href="/">
                      <Facebook />
                    </a>
                    <a href="/">
                      <Twitter  className="text-danger"/>
                    </a>
                  </Item>
                </List>

                <img
                  src={require("../images/ing.png")}
                  alt=""
                  className="ms-0 "
                />
              </Item>
            </Grid>
          </Grid>
        </div>
      </Box>
    </section>
  );
};

export default Home;
