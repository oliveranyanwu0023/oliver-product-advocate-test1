import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Advocate Vercel Skills Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://www.linkedin.com/in/oliver-anyanwu/">Oliver Anyanwu</a>
        </h1>

        <p className={styles.description}>
          Product Advocate Position at Vercel: Skills Test
        </p>

        <div className={styles.grid}>

          <a className={styles.card}>
            <Link href="/questions/q1">
              <h2>1. Things a Product Advocate Might Do &rarr;</h2>
            </Link>
          </a>

          <a className={styles.card}>
            <Link href="/questions/q2">
              <h2>2. Reflection on past experience &rarr;</h2>
            </Link>
          </a>

          <a className={styles.card}>
            <Link href="/questions/q3">
              <h2>3. Using Next.js &rarr;</h2>
            </Link>
          </a>
          
          <a className={styles.card}>
            <Link href="/questions/q4">
              <h2>4. Practice Email Responses &rarr;</h2>
            </Link>
          </a>

          <a className={styles.card}>
            <Link href="/questions/q5">
              <h2>5. Your personal recommendations &rarr;</h2>
            </Link>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
