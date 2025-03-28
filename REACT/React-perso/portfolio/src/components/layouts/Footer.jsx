import styles from "../module/Footer.module.scss";

function Footer() {
  return (
    <>
      <footer
        id="Footer"
        className={`d-flex flex-column justify-space-between ${styles.footer}`}
      >
        <h3 className={`m-5 ${styles.h3Text}`}>Collaborons ? </h3>
        <div
          className={`d-flex justify-space-between align-items-center m-5 ${styles.responsive}`}
        >
          <div className="d-flex flex-column mt-15">
            <a
              className={` ${styles.a}`}
              href="mailto:dev.baptiste15@gmail.com"
            >
              dev.baptiste15@gmail.com
            </a>
            <a className={`${styles.a}`}>07.83.93.98.44</a>
          </div>
          <a
            className={`${styles.donwload}`}
            href="/cv.pdf"
            download="cv_baptiste_williart.pdf"
          >
            Télécharger mon CV <i className="fa-solid fa-download"></i>
          </a>
        </div>
        <div
          className={`d-flex justify-space-between align-items-center ${styles.responsive}`}
        >
          <p>© Baptiste W 2025</p>
          <div>
            <a
              className={`mr-5 ${styles.a}`}
              href="https://github.com/BaptisteDev"
              target="_BLANK"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <a
              className={`mr-5 ${styles.a}`}
              href="https://www.linkedin.com/in/baptiste-williart-2930361ab/"
              target="_BLANK"
            >
              <i className="fa-brands fa-linkedin"></i> Linkedin
            </a>
            <a
              className={`mr-5 ${styles.a}`}
              href="https://www.figma.com/design/U6XAOtRtcmKGvVZTYoSx22/Projets-%2F-2020-to-2024?node-id=0-1&t=qzvaWAEWERdE9RsU-1"
              target="_BLANK"
            >
              <i className="fa-brands fa-figma"></i> Figma
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
