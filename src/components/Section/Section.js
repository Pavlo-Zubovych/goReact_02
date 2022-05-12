import React from "react";
import styles from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <srction className={styles.Section}>
      <h1 className={styles.Title}>{title}</h1>
      {children}
    </srction>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
