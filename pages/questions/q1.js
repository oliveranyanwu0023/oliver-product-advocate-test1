import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '/oliver-product-advocate-test1/styles/Home.module.css'

export default function FirstQuestion() {
  return (
    <>
      <h1>Things a Product Advocate Might Do</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}