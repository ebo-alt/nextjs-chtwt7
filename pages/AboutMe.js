import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <section>
      <img
        className={styles.Zurag}
        src="https://s3-alpha-sig.figma.com/img/5446/0c6b/07a60652048526012507cff338176e45?Expires=1675641600&Signature=oATUJoiXHFSeeiICKvo-ESPTcmSEh-Wav8NgseYTz7uPAZiGMmLoHH~LdUq77CTZ6QCmHT0TGbz1tjODq198MBawQU8FLnh-dOfLg8803ZgXjfGik-icLhFUnz7uDAEi1w8RDnh40fIXxe8cajQsW-tdXQgAqiww3VEC8QHHmCU0jYq9YYip3QI2qT0gKF3KsX4EGoQZUixw1y~3L2ZiLhH89O5CrpG4oPrPclobB0addDlDjLbmJzyX7PM7JK6-xa8IU9abDWvQlfA7l5kTTvqmo7CK8eOGdSBAZDDuyc6I84C-fuKLBvyzyqILCWyo0LSMd3vZnctWybdTdhiFPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <div className={styles.gadn}>
        <div className={styles.ehniih}>
          <h1 className={styles.ygaan}>#</h1>{' '}
          <h1 className={styles.tsagaan}>About-me</h1>
          <div className={styles.hr}></div>
        </div>
        <h1 className={styles.Text}>
          Hello, i’m Elias!
          <br /> I’m a self-taught front-end developer based in Kyiv,
          <br /> Ukraine. I can develop responsive websites from
          <br /> scratch and raise them into modern user-friendly web
          <br /> experiences.
          <br /> <br /> Transforming my creativity and knowledge into a<br />{' '}
          websites has been my passion for over a year. I have
          <br /> been helping various clients to establish their <br />
          presence online. I always strive to learn about the
          <br /> newest technologies and frameworks.
        </h1>
        <div className={styles.gurav}>
          <h2 className={styles.me}>Read more -></h2>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
