import React from "react";
// css
import "./Home.css";
// mui comp
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
// icon
import {
  AddLocation,
  Download,
  Email,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  background: "transparent",
}));

const Try = () => {
  return (
    <section className="try p-3">
      <Box sx={{ flexGrow: 1 }}>
        <div className="row">
          <Grid container spacing={2}>
            <Grid item xs={6} className="m-sm-auto image-grid">
              <Item>
                <img
                  src={require("../images/imgg.webp")}
                  alt=""
                  className="image-home"
                  width='99%'
                />
              </Item>
            </Grid>
            <Grid
              item
              xs={6}
              mt={5}
              xsm={12}
              className="col-sm-12  col-xs-12 try-text"
            >
              <Item className="col-sm-12  ms-4 col-xs-12 p-4 ">
                <Typography variant="h4" className="text-center">
                  Hello, <span className="text-primary"> I'm </span>
                </Typography>

                <Typography variant="h3" style={{textShadow:"2px 3px 4px gray"}} className="text">
                  <span className="text-danger">Abrar </span> Muthana Rakea
                </Typography>
                <Typography variant="h6" className="text-center">
                  Frontend Developer
                </Typography>

                <Typography
                  variant="subtitle2"
                  className="text-capitalize text-center"
                >
                  developing websites by react js with the latest versions
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

                  <a href="https://wa.me/+9647831190254">
                    <WhatsApp />
                  </a>
                  <button
                    className="text-primary"
                    style={{
                      background: "transparent",
                      border: "none",
                      // fontSize: "14px",
                    }}
                  > <Download />
                  </button>
                </Item>
                <p className="text-center mt-2 text-danger">
                  <AddLocation /> Iraq_Erbil
                </p>
              </Item>
            </Grid>
          </Grid>
        </div>
      </Box>
    </section>
  );
};

export default Try;
