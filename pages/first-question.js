import Link from 'next/link';

export default function FirstQuestion() {
  return (
    <>
      <h1>First Question</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}