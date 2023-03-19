import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styles from "./DoorControl.module.css";

const DoorControl = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(()=>{
    navigate("/home")
  }, [navigate]);
  return (
    <div className={styles.doorControl}>
      <div className={styles.doorControlChild} />
      <img
        className={styles.doorIcon104221}
        alt=""
        src="/dooricon10422-1@2x.png"
      />
      <img 
      className={styles.backButtonIcon} 
      alt="" 
      src="/back-button.svg" 
      onClick ={onBackButtonClick}
      />
      <img className={styles.doorControlItem} alt="" src="/rectangle-93.svg" />
      <div className={styles.doorControlInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.doorControlChild1} />
      <div className={styles.lockunlock}>LOCK/UNLOCK</div>
      <div className={styles.statusLog}>STATUS LOG</div>
      <div className={styles.div}>
        <p className={styles.p}>14:00 12/3/2023</p>
        <p className={styles.p}>13:00 12/3/2023</p>
        <p className={styles.p}>12:00 12/3/2023</p>
        <p className={styles.p}>10:00 12/3/2023</p>
        <p className={styles.p}>10:00 12/3/2023</p>
        <p className={styles.p}>9:00 12/3/2023</p>
        <p className={styles.p}>9:00 12/3/2023</p>
        <p className={styles.p7}>8:00 12/3/2023</p>
      </div>
      <div className={styles.unlockLockUnlockContainer}>
        <p className={styles.unlock}>UNLOCK</p>
        <p className={styles.p}>LOCK</p>
        <p className={styles.unlock1}>UNLOCK</p>
        <p className={styles.p}>LOCK</p>
        <p className={styles.unlock1}>UNLOCK</p>
        <p className={styles.p}>LOCK</p>
        <p className={styles.unlock1}>UNLOCK</p>
        <p className={styles.p7}>LOCK</p>
      </div>
    </div>
  );
};

export default DoorControl;
