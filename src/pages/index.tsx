import Head from 'next/head'
import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify Song Finder</title>
        <meta name="description" content="Find your Spotify Songs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar/>
      </main>
    </>
  )
}
