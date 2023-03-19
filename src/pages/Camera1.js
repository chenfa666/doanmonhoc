import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Camera1.module.css";

const Camera1 = () => {
  const navigate = useNavigate();

  const onVectorIcon1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.camera}>
      <div className={styles.cameraChild} />
      <img className={styles.cameraItem} alt="" src="/vector-4.svg" />
      <img
        className={styles.cameraInner}
        alt=""
        src="/vector-4.svg"
        onClick={onVectorIcon1Click}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-971@2x.png"
      />
      <img className={styles.cameraChild1} alt="" src="/rectangle-98@2x.png" />
      <img className={styles.cam5Icon} alt="" src="/cam-5@2x.png" />
      <img className={styles.cam4Icon} alt="" src="/cam-4@2x.png" />
      <img className={styles.cam3Icon} alt="" src="/cam-3@2x.png" />
      <div className={styles.cam7} />
      <img className={styles.cam2Icon} alt="" src="/cam-2@2x.png" />
      <div className={styles.cam2Info}>
        <div className={styles.cam2InfoChild} />
        <div className={styles.stair}>STAIR</div>
        <div className={styles.div}>
          <span className={styles.txt}>
            <p className={styles.p}>16:12:12</p>
            <p className={styles.p}>29/02/2023</p>
          </span>
        </div>
      </div>
      <div className={styles.cam2Info1}>
        <div className={styles.cam2InfoChild} />
        <div className={styles.stair}>OUTDOOR</div>
        <div className={styles.div}>
          <span className={styles.txt}>
            <p className={styles.p}>16:12:12</p>
            <p className={styles.p}>29/02/2023</p>
          </span>
        </div>
      </div>
      <div className={styles.cam2Info2}>
        <div className={styles.cam2InfoChild} />
        <div className={styles.stair}>BATHROOM HALL</div>
        <div className={styles.div}>
          <span className={styles.txt}>
            <p className={styles.p}>16:12:12</p>
            <p className={styles.p}>29/02/2023</p>
          </span>
        </div>
      </div>
      <div className={styles.cam2Info3}>
        <div className={styles.cam2InfoChild} />
        <div className={styles.stair}>MAIN HALL</div>
        <div className={styles.div}>
          <span className={styles.txt}>
            <p className={styles.p}>16:12:12</p>
            <p className={styles.p}>29/02/2023</p>
          </span>
        </div>
      </div>
      <div className={styles.cam2Info3}>
        <div className={styles.cam2InfoChild} />
        <div className={styles.stair}>MAIN HALL</div>
        <div className={styles.div}>
          <span className={styles.txt}>
            <p className={styles.p}>16:12:12</p>
            <p className={styles.p}>29/02/2023</p>
          </span>
        </div>
      </div>
      <img className={styles.cam2Icon} alt="" src="/cam-2@2x.png" />
      <div className={styles.cam2Info3}>
        <div className={styles.cam2InfoChild} />
        <div className={styles.stair}>MAIN HALL</div>
        <div className={styles.div}>
          <span className={styles.txt}>
            <p className={styles.p}>16:12:12</p>
            <p className={styles.p}>29/02/2023</p>
          </span>
        </div>
      </div>
      <div className={styles.cam2Info6}>
        <div className={styles.cam2InfoChild} />
        <div className={styles.stair}>WARDROBE</div>
        <div className={styles.div}>
          <span className={styles.txt}>
            <p className={styles.p}>16:12:12</p>
            <p className={styles.p}>29/02/2023</p>
          </span>
        </div>
      </div>
      <div className={styles.camInfo}>
        <div className={styles.cam2InfoChild} />
        <div className={styles.stair}>LIVING ROOM</div>
        <div className={styles.div}>
          <span className={styles.txt}>
            <p className={styles.p}>16:12:12</p>
            <p className={styles.p}>29/02/2023</p>
          </span>
        </div>
      </div>
      <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      <b className={styles.camera1}>Camera</b>
      <div className={styles.cameraChild2} />
    </div>
  );
};

export default Camera1;
