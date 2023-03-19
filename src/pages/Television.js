import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Television.module.css";

const Television = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/camera");
  }, [navigate]);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.television}>
      <img
        className={styles.televisionChild}
        alt=""
        src="/rectangle-94.svg"
        onClick={onRectangleClick}
      />
      <div className={styles.televisionItem} />
      <img className={styles.televisionInner} alt="" src="/vector-4.svg" />
      <b className={styles.television1}>Television</b>
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/vector-4.svg"
        onClick={onBackButtonIconClick}
      />
      <img
        className={styles.colorfulPlannerMobileAppPr}
        alt=""
        src="/colorful-planner-mobile-app-promotion-instagram-post-1@2x.png"
      />
      <div className={styles.tvName}>TV name</div>
      <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
      <img className={styles.televisionChild1} alt="" src="/vector-3.svg" />
      <div className={styles.volume}>Volume</div>
      <div className={styles.voiceCommand}>Voice command</div>
      <div className={styles.turnOnoff}>Turn ON/OFF</div>
      <img className={styles.frameIcon} alt="" src="/frame-19.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt="" src="/ellipse-42.svg" />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.div}>+</div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <div className={styles.div}>-</div>
      </div>
      <div className={styles.channel}>Channel</div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameItem} />
        <div className={styles.div}>+</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameInner} />
        <div className={styles.div}>-</div>
      </div>
    </div>
  );
};

export default Television;
