import styles from './Contact.module.css';
import Disc from '../image/Disc.js';

function Contact() {
  return (
    <section>
      <div className={styles.gadn}>
        <div className={styles.ehniih}>
          <h1 className={styles.ygaan}>#</h1>{' '}
          <h1 className={styles.tsagaan}>Contact</h1>
          <div className={styles.hr}></div>
        </div>
        <h1 className={styles.Text}>
          I’m interested in freelance opportunities. However,
          <br /> if you have other request or question, don’t
          <br /> hesitate to contact me
        </h1>
        <section>
          <h1>Message Me Here</h1>
          <Disc />
          <h1>!Elias#3519</h1>
        </section>
      </div>
    </section>
  );
}

export default Contact;
