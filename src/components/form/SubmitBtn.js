import styles from './SubmitBtn.module.css';

function SubmitBtn({text}) {

  return (
    <div className={styles.submitBtnContainer}>
      <button className={styles.submitBtn}>{text}</button>
    </div>
  );

}

export default SubmitBtn;
