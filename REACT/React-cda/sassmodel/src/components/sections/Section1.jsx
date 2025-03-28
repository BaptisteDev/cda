import React from "react";
import styles from "../module/Section1.module.scss";
import Available from "../landing/Available";
import ScrollButton from "../effect/scroll/ScrollButton";
export default function Section1() {
  return (
    <section className={` d-flex flex-column ${styles.sizePage} `}>
      <div className="flex-fill d-flex flex-column justify-space-arround ">
        <div
          className={`d-flex justify-content-center align-items-center ${styles.postionTextH1}`}
        >
          <div
            className={` d-flex flex-column align-items-center ${styles.posText}`}
          >
            <h1 className={`${styles.fonttext}`}>BAPTISTE</h1>
            <h5>Développeur web</h5>
          </div>
        </div>

        <div
          className={`d-flex justify-content-center ${styles.buttonArrow} ${styles.pos}`}
        >
          <ScrollButton key={"section2"} targetId={"section2"} />
        </div>
        <Available className="mb-20" />
      </div>
    </section>
  );
}
