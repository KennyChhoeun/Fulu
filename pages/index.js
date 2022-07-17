import Head from 'next/head'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Fulu</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Header />
      <Categories />
      <Results results={results}/>
    </div>
  )
}

// render on server side first
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  // request from tmdb database
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then(res => res.json());

  //return data as a prop to component
  return {
    props: {
      results: request.results,
    }
  } 
}