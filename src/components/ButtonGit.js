import React from "react";
import "./ButtonGit.scss";

function ButtonGit({ lienGit }) {
  return (
    <a href={lienGit} target="_blank" rel="noopener noreferrer">
      <span data-attr="Git">Git</span>
      <span data-attr="Hub">Hub</span>
    </a>
  );
}

export default ButtonGit;
