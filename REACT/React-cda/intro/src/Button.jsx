import styles from "./Button.module.css";

export default function Button({ text, action }) {
  return (
    <button className={`${styles.button}`}>
      {text} {action}
    </button>
  );
}
