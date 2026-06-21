import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={styles.backButton}>
      ← Back
    </button>
  );
}
