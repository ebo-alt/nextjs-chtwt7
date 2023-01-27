import Check from '../component/Check.js';
import Checkk from '../component/Checkk.js';
import Cheeck from '../component/Cheeck.js';
import styles from './Gurav.module.css';
import Dots from '../image/Dots.js';
import Border from '../image/Border.js';
import { useRouter } from 'next/router';

function Gurav() {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/projects/${id}`);
  };
  return (
    <section>
      <div className={styles.dots}>
        <Dots />
      </div>
      <section className={styles.second}>
        <div className={styles.neg}>
          <Check onClick={() => onClick(1)} />
        </div>
        <div className={styles.hoyr}>
          <Checkk onClick={() => onClick(2)} />
        </div>
        <div className={styles.third}>
          <Cheeck onClick={() => onClick(3)} />
        </div>
      </section>
      <div>
        <Border />
      </div>
    </section>
  );
}

export default Gurav;
