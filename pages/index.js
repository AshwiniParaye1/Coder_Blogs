import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // console.log(styles)
  return (
    <>
      <Head>
        <title>Coders Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        <div className={styles.center}>
        
          <div className={styles.thirteen}>
            <h1>Coders Blog</h1>
          </div>
        </div>
      <div className={styles.imgwrap}>
        <Image className={styles.homeImg} src="/home.jpg" alt='home' width={300} height={200} />
      </div>
      <p className={styles.tagline}>
          Discover, Learn and Grow with Me✍️
      </p>

      <div className={styles.blogs}>
        <h2>Latest Blogs</h2>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </div>

      </main>
    </>
  )
}
