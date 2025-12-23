import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import Button from "../button/Button";
import {greeting} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {greeting.resumeLink && (
          <div className="footer-resume-button">
            <a
              href={require("../../containers/greeting/resume.pdf")}
              download="Resume.pdf"
              className="download-link-button"
            >
              <Button text="Download Resume" />
            </a>
          </div>
        )}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by James Zhang")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by James Zhang
        </p>
      </div>
    </Fade>
  );
}
