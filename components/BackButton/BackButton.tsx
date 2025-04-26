"use client";

import { useTransitionRouter } from "next-view-transitions";
import styles from "./BackButton.module.css";

export function BackButton() {
  const router = useTransitionRouter();

  return (
    <button
      onClick={() => router.back()}
      className={styles.backButton}
    >
      ← Back
    </button>
  );
}
