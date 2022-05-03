import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import DragHandleTwoToneIcon from "@mui/icons-material/DragHandleTwoTone";
import { Container } from "@mui/material";

const drawerWidth = 170;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Navbars = () => {
  const [colorNav, setColorNav] = useState("transparent ");
  const [sizeNav, setSizeNav] = useState("60px");
  const [shadowNav, setSadowNav] = useState("none");

  const NAvScroll = () => {
    window.scrollY > 40 ? setColorNav("white") : setColorNav("transparent");
    window.scrollY > 40 ? setSizeNav("65px") : setSizeNav("60px");
    window.scrollY > 40
      ? setSadowNav("2px 4px 3px #eee  ")
      : setSadowNav("none");
  };

  useEffect(() => {
    window.addEventListener("scroll", NAvScroll);
    return () => {
      window.removeEventListener("scroll", NAvScroll);
    };
  }, []);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Container>
          <CssBaseline />
          <AppBar
            // position="fixed"
            open={open}
            style={{
              background: colorNav,
              height: sizeNav,
              boxShadow: shadowNav,
            }}
          >
            <Toolbar>
              <Typography
                variant="subtitle"
                noWrap
                sx={{ flexGrow: 1 }}
                component="div"
                style={{width:"40px",height:"80px"}}
                className='p-4 mt-5 ms-4'
              
              >
                <span className=" text-light p-4 rounded-circle bg-primary ">
                  Code/Mu.{" "}
                </span>
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: "none" }) }}
              >
                <MenuIcon
                  className="text-primary me-5 mt-3 fs-4 "
                  // style={{ marginRight: "40px" }}
                />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Container>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <DragHandleTwoToneIcon className="text-danger " />
              )}
            </IconButton>
          </DrawerHeader>
          <List>
            <ListItem className="border-bottom">
              <Link className="text-center text-secondary  fs-5  " to="Home">
                Home
              </Link>
            </ListItem>
          </List>
          {/* <Divider /> */}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbars;
