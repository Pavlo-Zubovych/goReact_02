import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <ul className={styles.List}>
      <li className={styles.Item}>
        <p className={styles.Text}> Good </p>
        <p className={styles.Statistics}> {good} </p>
      </li>

      <li className={styles.Item}>
        <p className={styles.Text}> Neutral </p>
        <p className={styles.Statistics}> {neutral} </p>
      </li>

      <li className={styles.Item}>
        <p className={styles.Text}> Bad </p>
        <p className={styles.Statistics}> {bad} </p>
      </li>

      <li className={styles.Item}>
        <p className={styles.Text}> Positive feedback </p>
        <p className={styles.Statistics}> {positivePersentage}% </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
