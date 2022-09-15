import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function FirstQuestion() {
  return (
    <>
      <h1>Things a Product Advocate Might Do</h1>

      <h2>

      Most Interested:

        - Write direct and concise emails that dig into a prospect&apos;s pain points and needs
        - Hop on a Zoom call to qualify a prospect or educate them about Vercel
        - Organize, Schedule & book meetings for Account Executives with prospects

        Least Interested:

        - Research the headquarters & ownership of a company to determine who to route it to
        - Evaluate an application to help determine if it&apos;s commercial or not
        - Evaluate OSS sponsorship applications
       
      </h2>

      <h2>
        <Link href="/">Return to Main Page</Link>
      </h2>
    </>
  );
}