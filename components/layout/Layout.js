import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="https://sinaabolhasani.ir/">
          <h1>BOTOCAR</h1>
          <hr></hr>
          <p>Choose and Buy you car</p>
        </Link>
      </header>
      <div className={styles.continar}>{children}</div>
      <footer className={styles.footer}>
        <Link href="https://sinaabolhasani.ir/" className={styles.link}>
          <h1>SinaAbolhasani / </h1>
          <p>call me</p>
        </Link>
      </footer>
    </>
  );
}

export default Layout;
