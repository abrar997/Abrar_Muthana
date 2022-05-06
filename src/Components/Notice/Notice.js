import { Send } from "@mui/icons-material";
import React from "react";
import "./notice.css";
const Notice = () => {
  return (
    <div className="">
      <h5 className="ms-4 text-danger fw-bold mt-4">
        your evaluate and notice so important for help me to improve my skills{" "}
      </h5>
      <div className="row">
      <form className="form m-auto col-lg-4  shadow  p-4 border">
        <input
          type="text"
          className="form-group p-2"
          name="name"
          placeholder="your name"
          />
        <p className="mb-0 mt-3 text-secondary">write your message here </p>
        <textarea rows="4" className="mt-2 "></textarea>
      <button className="btn text-primary  mt-2  m-auto">send <Send/> </button>
      </form>
      <div className="col-lg-6"><img  src={require('../images/notice.gif') } width='80%' alt=""/> </div>
          </div>
    </div>
  );
};

export default Notice;
