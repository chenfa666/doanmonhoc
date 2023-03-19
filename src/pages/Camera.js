import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Camera.module.css";

const Camera = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(()=>{
    navigate("/home")
  }, [navigate]);
  return (
    <div className={styles.camera}>
      <div className={styles.cameraChild} />
      <img 
      className={styles.backButtonIcon} 
      alt="" 
      src="/back-button.svg" 
      onClick ={onBackButtonClick}
      />
      <img className={styles.cameraItem} alt="" src="/rectangle-97@2x.png" />
      <div className={styles.div}>
        <span className={styles.txt}>
          <p className={styles.p}>16:12:12</p>
          <p className={styles.p}>29/02/2023</p>
        </span>
      </div>
      <b className={styles.camera1}>Camera</b>
      <div className={styles.cam1} />
      <div className={styles.stair}>STAIR</div>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <img className={styles.cameraInner} alt="" src="/vector-5.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector-6.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <img className={styles.polygonIcon} alt="" src="/polygon-3.svg" />
    </div>
  );
};

export default Camera;
