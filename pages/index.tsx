import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Square from '../components/Square'
import Board from '../containers/Board'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Teo</title>
        <meta name="description" content="Tic Tac Teo using next js and Typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className={styles.main}>
        <Board />
      </main>
    </div>
  )
}

export default Home
