import styles from "./page.module.css";

export default function Home() {
  console.log(styles);
  return (
    <div>
      <h2 className={styles.giantandpurple}>Home</h2>
      <p>Wassup!</p>
    </div>
  );
}
