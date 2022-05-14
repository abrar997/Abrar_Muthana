import React, { useState } from "react";
import { Send } from "@mui/icons-material";
import "./notice.css";
const Notice = () => {
  const [data, setData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {
    setData(...data.current.value);
    console.log("hello world");
  };

  return (
    <div className="p-4 notice ">
      <h5 className="ms-4 text-danger fw-bold mt-4 mb-4">
        your evaluate and notice so important for help me to improve my skills{" "}
      </h5>
      <div className="row">
        <form
          className="form m-auto col-lg-4  shadow  p-4 border"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="form-group p-2"
            name="name"
            placeholder="your name"
            onChange={handleChange}
          />
          <p className="mb-0 mt-3 text-danger">write your message here </p>
          <textarea
            rows="4"
            className="mt-2 "
            onChange={handleChange}
          ></textarea>
          <button className="btn text-primary  mt-2  m-auto">
            send <Send />{" "}
          </button>
        </form>
        <div className="col-lg-6">
          <img src={require("../images/notice.gif")} width="75%" alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Notice;
