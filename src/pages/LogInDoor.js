import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogInDoor.module.css";

const LogInDoor = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.logInDoor}>
      <b className={styles.enterDoorPassword}>Enter Door Password</b>
      <img className={styles.backButtonIcon} alt="" src="/back-button.svg" />
      <img className={styles.logInDoorChild} alt="" />
      <div className={styles.logInDoorItem} onClick={onRectangle1Click} />
      <b className={styles.b}>**********</b>
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-30.svg" />
        <div className={styles.div}>1</div>
      </div>
      <div className={styles.ellipseGroup}>
        <img className={styles.groupChild} alt="" src="/ellipse-301.svg" />
        <div className={styles.div}>2</div>
      </div>
      <div className={styles.ellipseContainer}>
        <img className={styles.groupChild} alt="" src="/ellipse-302.svg" />
        <div className={styles.div}>3</div>
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.groupChild} alt="" src="/ellipse-303.svg" />
        <div className={styles.div}>6</div>
      </div>
      <div className={styles.ellipseParent1}>
        <img className={styles.groupChild} alt="" src="/ellipse-304.svg" />
        <div className={styles.div}>5</div>
      </div>
      <div className={styles.ellipseParent2}>
        <img className={styles.groupChild} alt="" src="/ellipse-305.svg" />
        <div className={styles.div}>4</div>
      </div>
      <div className={styles.ellipseParent3}>
        <img className={styles.groupChild} alt="" src="/ellipse-306.svg" />
        <div className={styles.div}>7</div>
      </div>
      <div className={styles.ellipseParent4}>
        <img className={styles.groupChild} alt="" src="/ellipse-307.svg" />
        <div className={styles.div}>8</div>
      </div>
      <div className={styles.ellipseParent5}>
        <img className={styles.groupChild} alt="" src="/ellipse-308.svg" />
        <div className={styles.div}>9</div>
      </div>
      <div className={styles.ellipseParent6}>
        <img className={styles.groupChild} alt="" src="/ellipse-309.svg" />
        <div className={styles.div}>#</div>
      </div>
      <div className={styles.ellipseParent7}>
        <img className={styles.groupChild} alt="" src="/ellipse-3010.svg" />
        <div className={styles.div}>0</div>
      </div>
      <div className={styles.ellipseParent8}>
        <img className={styles.groupChild} alt="" src="/ellipse-3011.svg" />
        <div className={styles.div}>*</div>
      </div>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <div className={styles.logInDoorInner} />
    </div>
  );
};

export default LogInDoor;
