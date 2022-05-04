import { More } from "@mui/icons-material";
import React from "react";
import "./SkillEx.css";
import Skills from "./Skills";

const SkilExper = () => {
  return (
    <>
      <div className="SkilExper mt-3">
        <div className="row ">
          <div className="col-lg-3 left-skillExp">
            <img alt="" src={require("../images/11.gif")} />
          </div>
          <div className="col-lg-9   right-skillEx">
            <h1 className=" mt-5 ">
              <span className="text-danger">Skills</span> and
              <span className="text-danger"> Experince</span>
            </h1>
            <div className="mt-4">
              <Skills />
              <h1 className="fs-5 text-danger ms-2">
                <More /> Other skills
              </h1>
              <ul>
                <li>photoshop</li>
                <li>microsoft office (Word, PowerPoint,Excel ) </li>
                <li>calligraphy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SkilExper;
