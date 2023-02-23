import { BsSuitHeartFill } from "react-icons/bs";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Copyright &#169;{" "}
        <a
          href="https://mehmetkeskinn.github.io/portfolio/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehmet
        </a>{" "}
      </span>
      <span>
        Made with{" "}
        <span className={styles.heart}>
          <BsSuitHeartFill />
        </span>
      </span>
    </footer>
  );
}

export default Footer;
