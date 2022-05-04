import React from "react";
import { Work } from "@mui/icons-material";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
const Skills = () => {
  return (
    <div>
      <p className="fw-bold">
        <span className="text-primary me-2">
          <Work />
        </span>
        Experince with more than one year  as Frontend and three months
        as Backend developer
      </p>
      <p className="fw-bold">
        <span className="text-primary me-2">
          <WorkspacesIcon />
        </span>
        Skills as
        <span className="border-bottom text-secondary"> Frontend :</span>
      </p>
      <p style={{ fontSize: "10px" }} className="ms-4 text-secondary">
        ** u can evaluate skills by looking to my work
      </p>
      <div className="row">
        <div className="col-lg-4">
          <ul className="  flex-row flex-wrap justify-content-between ">
            <li> HTML , HTML5</li>
            <li> CSS , CSS3</li>
            <li>bootstrap 4 ,bootstarp5 </li>
            <li>java script </li>
            <li>react js</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <ul>
            <li>hooks</li>
            <li>git hub</li>
            <li>vercel </li>
            <li>netlify</li>
          </ul>
        </div>
        {/* ----------------------------------- */}
        <p className="fw-bold">
          <span className="text-primary me-2">
            <WorkspacesIcon />
          </span>
          Skills as
          <span className="border-bottom text-secondary"> Backend :</span>
        </p>
        <div>
          <ul>
            {" "}
            <li>php</li>
            <li>my sql</li>
          </ul>
        </div>

        {/* ----------------------------------- */}
      </div>
    </div>
  );
};

export default Skills;
