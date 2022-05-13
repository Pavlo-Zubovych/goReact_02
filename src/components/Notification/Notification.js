import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notification = ({ mesege }) => {
  return <h2 className={styles.Messege}>{mesege}</h2>;
};

Notification.propTypes = {
  mesege: PropTypes.string.isRequired,
};

export default Notification;
