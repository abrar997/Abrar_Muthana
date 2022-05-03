import React from "react";
import "../../App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Home.css";
import {
  Download,
  Email,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  background: "transparent",
}));

const Try = () => {
  return (
    <section className="mt-5 try">
      <Box sx={{ flexGrow: 1 }}>
        <>
          <Grid container spacing={2}>
            <Grid item xs={6} className='col-sm-12 col-xs-12 m-sm-auto'  >
              <Item>
                <img src={require("../images/imgg.webp")} alt="" />
              </Item>
            </Grid>
            <Grid item xs={6} mt={5} className='col-sm-12 col-xs-12'>
              <Item className="ms-5">
                <Typography variant="h4" className="text-center">
                Hello,  <span className="text-primary"> I'm </span>
                </Typography>
                <Typography variant="h3">
                  <span className="text-danger">Abrar </span> Muthana Rakea
                </Typography>
                <Typography variant="h6" className="text-center">
                  Frontend Developer
                </Typography>
                <Typography variant="subtitle2" className="text-capitalize text-center">
                  {" "}
                  developing websites by react js with the latest  versions 
                </Typography>
                <Item className="text-center d-flex align-items-center mt-3 justify-content-center  ps-2">
                  <a href="mailto:abrprogramming@gmail.com">
                    <Email />
                  </a>
                  <a href=".">
                    <LinkedIn />
                  </a>
                  <a href="/">
                    <Instagram />
                  </a>
          
                  <a  href="https://wa.me/+9647831190254">
                    <WhatsApp />
                  </a>
                  <button
                    className=" p-1 text-primary"
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: "14px",
                    }}
                  >
                    resume <Download />{" "}
                  </button>
                </Item>
              </Item>
            </Grid>
          </Grid>
        </>
      </Box>
    </section>
  );
};

export default Try;
