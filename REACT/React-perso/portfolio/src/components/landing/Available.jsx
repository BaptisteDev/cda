import React from "react";
import styles from "../module/Available.module.scss";
import Clock from "../effect/clock/Clock";
export default function Available() {
  return (
    <div className={`d-flex justify-space-between p-10 w-100 ${styles.pos}`}>
      <div className="d-flex align-items-center">
        <span
          className={`d-flex align-items-center mr-5 ${styles.span} ${styles.sizeText} `}
        ></span>
        <p>Disponible</p>
      </div>

      <div className={`d-flex align-items-center ${styles.sizeText} `}>
        <p className="mr-5">France</p>
        <Clock />
      </div>
    </div>
  );
}
