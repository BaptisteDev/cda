import Button from "./button";
import styles from "./Card.module.css";
export default function Card({ title, text, btnText }) {
  return (
    <div>
      <h2 className={`${styles.h2Title} ${styles.paragraph}`}>{title}</h2>
      <p className={`${styles.paragraph}`}>{text}</p>
      <Button text={btnText}></Button>
    </div>
  );
}
