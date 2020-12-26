import React from "react";
import "./Modal.css";
import { GrClose } from "react-icons/gr";
import { useGlobalContext } from "../../Context/context";

const Modal = ({ children }) => {
  const { showModal, hideModalHandler } = useGlobalContext();
  return (
    <div
      className={showModal ? "overLay displayModal" : "overLay"}
      onClick={hideModalHandler}
    >
      <div
        className={showModal ? "modalContainer displayModal" : "modalContainer"}
      >
        <button className="closeModal" onClick={hideModalHandler}>
          <GrClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
