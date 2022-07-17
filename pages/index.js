import Head from 'next/head'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Results from '../components/Results'

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
      <Categories />
      {/*Results*/}
      <Results />
    </div>
  )
}
