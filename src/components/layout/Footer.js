import {FaLinkedin, FaGithub} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {

  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>Vinícius Amaral</span> &copy; 2024
      </p>
    </footer>
  );

}

export default Footer;
