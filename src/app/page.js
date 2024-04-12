import styles from "./css/page.module.css";
import Container from "./pages/Container";
import Navigation from "./pages/Navigation";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation classes={styles} />
      <Container classes={styles} />
    </main>
  );
}

