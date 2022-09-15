import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Home.module.css'

export default function FifthQuestion() {
  return (
    <>

     <div className={styles.container}>
        <Head>
          <title>Your personal recommendations</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Your personal recommendations</h1>

          <p className={styles.description}>
            <i>When it comes to looking for a solution for hosting your Next.js site, what are some of the common things you would value as the Engineering Manager for:</i>
          </p>

          <p className={styles.description}>
            <h2>1. A mom and pop business?</h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>

             <h2>2. An NFT?</h2>
              <ul>
                <li>]</li>
                <li></li>
                <li></li>
              </ul> 
            <h2>3. A Marketing Page for a large corporation like Nintendo?</h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul> 
          </p>

          <h1 className={styles.return}>
            <Link href="/">Return to Main Page</Link>
          </h1>

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
   </>
  );
}