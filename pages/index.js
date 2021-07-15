import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adip
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adip
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adip
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See All Ninjas</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
