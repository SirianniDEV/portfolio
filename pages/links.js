import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Bubble from '../components/bubble'
import Window from '../components/window'
import Portrait from '../components/portrait'
import Polaroid from '../components/polaroid'
import AppButton from '../components/button'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import CircleImage from '../components/CircleImage'

import Title from '../components/Title';
import Project from '../components/project'

export default function Links() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofia Siriani - Portfolio</title>
        <meta content="Sofia Siriani - Portfolio" />
        <link rel="icon" href="/S-favicon.png" />
      </Head>

      <div className={styles.heroHeader}>
             <Navigation/>
      </div>

      <main className={styles.main}>

        <CircleImage src='/portrait-02.jpg'/>

        <Title txt="I'm Sofia, a digital designer and web developer."/>
            <AppButton txt='Check out my portfolio!'/>
            <AppButton txt='My latest project'/>
            <AppButton txt='Latest Blog post'/>
            <AppButton txt='My Resume'/>
            <AppButton txt='Contact me'/>

      </main>

      <Footer/>
    </div>
  )
}