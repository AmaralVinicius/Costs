import styles from './Loading.module.css';
import loading from '../../assets/loading.svg'

function Loading() {

  return (
    <div className={styles.loaderContainer}>
      <img src={loading} alt="loading" className={styles.loader}/>
    </div>
  );

}

export default Loading;
