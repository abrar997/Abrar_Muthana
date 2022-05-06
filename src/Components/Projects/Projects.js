import React, { useState } from "react";
import "./projects.css";
import { GitHub, Link } from "@mui/icons-material";
import edu from "../images/work/edu.png";
import fal from "../images/work/fal.png";

const Projects = () => {
  const [data] = useState([
    {
      name: "Ecommerece Education",
      gitHub: "https://github.com/abrar997/Final-frontend.git",
      link: "",
      img: edu,
    },
    {
      name: "team pattern",
      gitHub: "mailto:abraralrawi997@gmail.com",
      link: "",
      img: fal,
    },
    {
      name: "Ecommerece market",
      gitHub: "https://warm-profiterole-43f7b0.netlify.app/#/Home",
      link: "",
      img: "",
    },
    { name: "", gitHub: "mailto:abraralrawi997@gmail.com", link: "", img: "" },
    { name: "", gitHub: "mailto:abraralrawi997@gmail.com", link: "", img: "" },
    { name: "", gitHub: "mailto:abraralrawi997@gmail.com", link: "", img: "" },
  ]);
  const [back, setBack] = useState([
    { name: "CRUD system", img: "", github: "", link: "" },
    { name: "to do list app", img: "", github: "", link: "" },
    { name: "", img: "", github: "", link: "" },
    { name: "", img: "", github: "", link: "" },
  ]);

  return (
    <div className="work">
      <h1 className="text-center mt-4 mb-4 text-capitalize fw-bold">
        my<span className="text-danger "> work </span>
      </h1>
      <p className="fw-bold light ms-5 ps-2 mb-4 text ">1) As FrontEnd :</p>
      <div className="row">
        <div className="cards col-lg-12 ">
          {data.map((item) => {
            return (
              <div className="text-center p-2 border-none shadow mb-4  card col-lg-3 me-3 col-sm-12 col-xs-12 col-md-6 col-xl-3">
                <div className="card-image col-lg-12 ">
                  <img src={item.img} alt="" width={"100%"} />
                </div>
                <h6 className="card-heade text-danger mt-3 p-2 fw-bold bg-light border">
                  {item.name}
                </h6>
                <div className="card-body bg-light text-decoration-none">
                  <a
                    href={`${item.gitHub}`}
                    title="github link"
                    className="text-decoration-none"
                  >
                    <GitHub />
                  </a>
                  <a href={`${item.link}`} title="web link " className="ms-3">
                    <Link />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
<p className="fw-bold light ms-5 ps-2 mb-4 text">2) As Backend </p>
<div className="cards">
{back.map((itemba)=>{
return <div className="text-center p-2 border-none shadow mb-4  card col-lg-3 me-3 col-sm-12 col-xs-12 col-md-6 col-xl-3">
<div className="card-image col-lg-12 ">
  <img src={itemba.img} alt="" width={"100%"} />
</div>
<h6 className="card-heade text-danger mt-3 p-2 fw-bold bg-light border">
  {itemba.name}
</h6>
<div className="card-body bg-light text-decoration-none">
  <a
    href={`${itemba.gitHub}`}
    title="github link"
    className="text-decoration-none"
  >
    <GitHub />
  </a>
  <a href={`${itemba.link}`} title="web link " className="ms-3">
    <Link />
  </a>
</div>
</div>
})}






</div>




      </div>
    </div>
  );
};

export default Projects;
