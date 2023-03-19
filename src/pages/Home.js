import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/television");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/log-in-door");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/camera");
  }, [navigate]);

  const onLIGHTINGSYSTEMTextClick = useCallback(() => {
    navigate("/lighting-system");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.swipe}>Swipe</div>
      <div className={styles.seeAll}>See All</div>
      <div className={styles.deviceList}>Device list</div>
      <img
        className={styles.homeItem}
        alt=""
        src="/rectangle-90.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.homeInner}
        alt=""
        src="/rectangle-91.svg"
        onClick={onRectangle2Click}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-92.svg"
        onClick={onRectangle3Click}
      />
      <img className={styles.homeChild1} alt="" src="/rectangle-931.svg" />
      <div
        className={styles.lightingSystem}
        onClick={onLIGHTINGSYSTEMTextClick}
      >
        LIGHTING SYSTEM
      </div>
      <div className={styles.television}>TELEVISION</div>
      <div className={styles.camera}>CAMERA</div>
      <div className={styles.door}>DOOR</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.homeChild2} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-12@2x.png" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </div>
      <b className={styles.helloMrUserContainer}>
        <p className={styles.helloMrUser}>
          <span>
            <span>Hello Mr User</span>
          </span>
        </p>
        <p className={styles.welcomeHome}>
          <span>
            <span>Welcome home</span>
          </span>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </b>
    </div>
  );
};

export default Home;
