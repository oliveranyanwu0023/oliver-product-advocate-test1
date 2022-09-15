import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Home.module.css'

export default function FirstQuestion() {
  return (
    <>

     <div className={styles.container}>
        <Head>
          <title>Things a Product Advocate Might Do</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Things a Product Advocate Might Do</h1>

          <p className={styles.description}>
            <i>List the 3 things you would be most interested in doing and the 3 you would be least interested in doing</i>
          </p>

          <p className={styles.description}>
            <h2>Most Interested:</h2>
              <ul>
                <li>Write direct and concise emails that dig into a prospect&apos;s pain points and needs</li>
                <li>Hop on a Zoom call to qualify a prospect or educate them about Vercel</li>
                <li>Organize, Schedule & book meetings for Account Executives with prospects</li>
              </ul>

             <h2>Least Interested:</h2>
              <ul>
                <li>Research the headquarters & ownership of a company to determine who to route it to</li>
                <li>Evaluate an application to help determine if it&apos;s commercial or not</li>
                <li>Evaluate OSS sponsorship applications</li>
              </ul> 
          </p>

          <h1 className={styles.title}>
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