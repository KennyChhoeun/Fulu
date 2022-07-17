import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fulu</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      {/*Header*/}
      <Header />
      {/*Categories*/}
      
      {/*Results*/}
    </div>
  )
}
