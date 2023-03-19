import styles from "./LightingSystem.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LightingSystem = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(()=>{
    navigate("/home")
  }, [navigate]);
  return (
    <div className={styles.lightingSystem}>
      <div className={styles.lightingSystemChild} />
      <div className={styles.lightingSystemItem} />
      <b className={styles.lightingSystem1}>
        <p className={styles.lightingSystem2}>Lighting System</p>
        <p className={styles.blankLine}>&nbsp;</p>
      </b>
      <div className={styles.schedule}>Schedule</div>
      <div className={styles.low}>Low</div>
      <div className={styles.high}>High</div>
      <div className={styles.from1200AmContainer}>
        <span className={styles.from1200AmContainer1}>
          <span>{`From  `}</span>
          <b className={styles.b}>12:00</b>
          <span>{` A.M          To  `}</span>
          <b className={styles.b}>5</b>
          <span> P.M</span>
        </span>
      </div>
      <div className={styles.div}>50%</div>
      <div className={styles.brightness}>Brightness</div>
      <div className={styles.lightName}>light name</div>
      <img className={styles.lightingSystemInner} alt="" src="/vector-2.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
      <div className={styles.lightingSystemChild} />
      <div className={styles.lightingSystemItem} />
      <b className={styles.lightingSystem3}>
        <p className={styles.lightingSystem2}>Lighting System</p>
        <p className={styles.blankLine1}>&nbsp;</p>
      </b>
      <div className={styles.low}>Low</div>
      <div className={styles.high}>High</div>
      <div className={styles.div}>50%</div>
      <div className={styles.div}>50%</div>
      <div className={styles.brightness}>Brightness</div>
      <div className={styles.lightName}>light name</div>
      <img 
      className={styles.backButtonIcon} 
      alt="" 
      src="/back-button.svg" 
      onClick ={onBackButtonClick}
      />
      <img className={styles.lightingSystemInner} alt="" src="/vector-2.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/ellipse-29.svg" />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-18.svg" />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.lightingSystemChild4} />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.groupIcon} alt="" src="/group-18.svg" />
    </div>
  );
};

export default LightingSystem;
