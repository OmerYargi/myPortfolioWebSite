import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const TopBar = () => {
  return (
    <div id="top-bar">
      <h1>Omer Yargı</h1>
      <ul>
        <li>
          <a
            rel="noreferrer"
            href="https://github.com/OmerYargi"
            target={"_blank"}
          >
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/omeryargi"
            target={"_blank"}
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            href="mailto:yarginomerfaruk@gmail.com"
            target={"_blank"}
          >
            <AiOutlineMail />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/1YXyMSqxAw_DZqV7784AFTXIHdUidYMbg/view?usp=sharing"
            target={"_blank"}
          >
            <img src={require("../assets/cv.png")} alt="cv" />cv
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
