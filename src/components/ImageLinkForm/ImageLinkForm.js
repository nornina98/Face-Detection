import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {`THIS MAGIC BRAIN WILL DETECT FACES IN YOUR PICTURES. LET TRY'S IT !`}
      </p>

      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
          <input
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
            type="text"
            placeholder="Please insert your image URL"
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            DETECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
