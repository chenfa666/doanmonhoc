import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();

  const onSignInClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.signIn}>
      <img
        className={styles.theBialons36bWo8ycmsUnsplaIcon}
        alt=""
        src="/thebialons36bwo8ycmsunsplash-1.svg"
      />
      <img className={styles.signInChild} alt="" />
      <div className={styles.home}>
        <p className={styles.home1}>Home.</p>
      </div>
      <div className={styles.signInItem} />
      <div className={styles.signInInner} />
      <b className={styles.username}>Username</b>
      <b className={styles.password}>Password</b>
      <Button
        className={styles.signIn1}
        sx={{ width: 327 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={onSignInClick}
      >
        Sign In
      </Button>
      <div className={styles.forgottonYourPassword}>Forgotten password?</div>
      <img className={styles.logoIcon} alt="" src="/logo1.svg" />
      <div className={styles.login}>LOGIN</div>
    </div>
  );
};

export default SignIn;
