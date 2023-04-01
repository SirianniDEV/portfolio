import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Window from '../components/window'
import Contact from '../components/contact'
import Portrait from '../components/portrait'

export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Sofia Siriani - Portfolio</title>
        <meta content="Sofia Siriani - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <div className={styles.heroHeader}>
            <img className={styles.heroImg} src='/headshot.png'/>
        </div>
      <main className={styles.main}>
            {/* <div className={styles.portrait}>
              <div className={styles.containerInner}>
                <p>Digital Designer + Developer</p>
                <h1 className={styles.sofia}></h1>
                  <img
                    className={styles.circle}
                    src='/SVG/portrait-bg.svg'/> 
                  <img
                    className={styles.img1}
                    src='/SVG/portrait.svg' />
              </div>
          </div> */}
     
      </main>
    </div>
  )
}
