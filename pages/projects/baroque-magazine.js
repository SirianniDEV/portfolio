import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import Title from '../../components/Title';
import Project from '../../components/project'
import Polaroid from '../../components/polaroid'
import AppButton from '../../components/button'
import Window from '../../components/window'
import Link from 'next/link'

export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Sofia Siriani - Portfolio</title>
        <meta content="Sofia Siriani - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


          <div className={styles.heroHeader}>
             <Navigation/>
            <Title txt="Baroque Architecture: Volume One"/>
        </div>
      <main className={styles.main}>

        <div className={styles.projectsRow}>
            <div className={styles.projectsColumnLeft}>
                <iframe src="https://indd.adobe.com/embed/b52d5ec3-4491-4330-88f3-09f3c37c7459?startpage=1&amp;allowFullscreen=true" width="650px" height="460px"  allowfullscreen=""></iframe>
            </div>
            <div className={styles.projectsColumnRight}>
                <Window
                txt1='With the use of InDesign, I created a visually stunning magazine that showcases the Baroque architectural style, sourced from a Wikipedia article. The design effectively combined elements of both digital and print design, including layouts with text and media. The final outcome was a polished and attractive publication that can be enjoyed both on digital devices and in print form.'
                txt2=' '/>
                <AppButton txt='Check it Out'  handleClick={() => window.location.href = 'https://indd.adobe.com/embed/b52d5ec3-4491-4330-88f3-09f3c37c7459?startpage=1&allowFullscreen=true'}/>
            </div>
        </div>
      
       
     
      </main>
      <Footer/>
    </div>
  )
}