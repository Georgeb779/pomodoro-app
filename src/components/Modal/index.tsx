import React from "react";
import "./index.scss";

export function Modal() {
  return (
    <div className='modal__container'>
      <div className='modal-item__container'>
        <div className='modal-item__container--content'>
          <h1>Hello peter</h1>
        </div>
        <button>Apply</button>
      </div>
    </div>
  );
}
