import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTuit } from "../actions/tuits-actions";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState({ tuit: "" });
    const dispatch = useDispatch();


  return (
    <div
      className="mt-2 form-group d-flex flex-row  align-item-start justify-content-start"
      style={{ width: "100%" }}
    >
      <div className="mt-1">
        <img
          className="rounded-circle wd-img wd-img-width-all"
          style={{ borderRadius: "24px" }}
          src="https://idolwiki.com/pics/John%20Cena/John%20Cena.png"
          width="50px"
          height="50px"
        />
      </div>
      <div style={{ width: "100%" }}>
        <textarea
          className="form-control ps-2"
          value={whatsHappening.tuit}
          style={{ fontSize: "15px",color: "white",backgroundColor: "black",borderBottom: "1px solid rgb(47, 51, 54)",
          }}
          onChange={(event) => {
            setWhatsHappening({ tuit: event.target.value });
          }}

          placeholder="What's Happening?"
        ></textarea>
        <div>
          <i className="my-2 pt-1 mx-2 fa fa-image wd-color"
          ></i>
          <i className="my-auto mx-2 fa fa-chart-line wd-color"
          ></i>
          <i className="my-auto mx-2 fa fa-smile wd-color"
          ></i>
          <i className="my-auto mx-2 fa fa-calendar wd-color"
          ></i>
          <button
            className="btn btn-primary float-end m-2"
            style={{ borderRadius: "24px" }}
            onClick={() => createTuit(dispatch, whatsHappening)}>Tuit</button>
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;