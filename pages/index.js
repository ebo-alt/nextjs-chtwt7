import styles from './Index.module.css';
import Header from '../component/Header.js';
import Left from '../component/Left.js';
import Main from '../component/Main.js';
import LeftText from '../component/LeftText.js';
import DrWho from '../component/DrWho.js';
import Work from '../pages/Work.js';
import AboutMe from '../pages/AboutMe.js';
import Contact from '../pages/Contact.js';

function Index() {
  return (
    <section>
      <LeftText />
      <div className={styles.right}>
        <Main />
      </div>
      <section
        style={{
          marginTop: 500,
        }}
      >
        <DrWho />
      </section>
      <Work />
      <AboutMe />
      <Contact />
    </section>
  );
}

export default Index;
