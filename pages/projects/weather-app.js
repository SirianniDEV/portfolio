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
    <div className={styles.container}>
      <Head>
        <title>Sofia Siriani - Portfolio</title>
        <meta content="Sofia Siriani - Portfolio" />
        <link rel="icon" href="/S-favicon.png" />
      </Head>


          <div className={styles.heroHeader}>
             <Navigation/>
            <Title txt="Weather Apps"/>
        </div>
      <main className={styles.main}>

        <div className={styles.projectsRow}>

        <div className={styles.projectsColumnLeft}>
        <Polaroid src='/project-photos/wa-1.png' width={500} height={520}/>
        </div>
        <div className={styles.projectsColumnRight}>
        <Window
        txt1='In a recent project I have developed a small weather app using the NextJS framework and MaterialUI for styling along with Framer Motion to create a dynamic application that calls data from OpenWeatherAPI using Axios.'
        txt2='The app allows users to find the weather of any location by entering a city&apos;s name in the input field. It provides the temperature, a weather description and wind gust. Weather App works on any device on the browser of your choice. '/>
        <AppButton txt='Check it Out'  handleClick={() => window.location.href = 'https://weather-app-flax-zeta.vercel.app/'}/>

        </div>
        </div>
      
       
     
      </main>
      <Footer/>
    </div>
  )
}