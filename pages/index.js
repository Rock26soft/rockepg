// pages/index.js
import Head from 'next/head';
import Button from '../components/button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Next.js App</h1>
        <p>This is a simple Next.js app.</p>
      </main>
      <Button>
        

      </Button>

      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
}
