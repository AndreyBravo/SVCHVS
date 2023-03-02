import React, { useState } from "react";
import "../index.css";
import { TAddForm } from "./forms/TAddForm";
import { Link } from "react-router-dom";

export const Header = ({ TData, setTData }) => {
  const [addFormActive, setAddFormActive] = useState(false);

  const handleAddCard = () => {
    setAddFormActive(true);
  };
  return (
    <div className="ishop-header ">
      <div
        className={
          "ishop-header-logo" + (addFormActive ? " new-add-button-none" : "")
        }
      >
        <img src="/images/logo.png" alt="logo"></img>
      </div>
      <h1 className={addFormActive ? "new-add-button-none" : ""}>T-Shorts</h1>
      <nav>
        <Link to="/blog">blog</Link>
        <Link to="/about">about</Link>
      </nav>
      <TAddForm
        active={addFormActive}
        setActive={setAddFormActive}
        TData={TData}
        setTData={setTData}
      />
      <button
        className={addFormActive ? "new-add-button-none" : ""}
        onClick={handleAddCard}
      >
        New
      </button>
    </div>
  );
};
