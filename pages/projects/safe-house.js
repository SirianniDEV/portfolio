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
        </div>
        
         <Title txt="SAFE HOUSE"/>
      <main className={styles.main}>

        <div className={styles.projectsRow}>

        <div className={styles.projectsColumnLeft}>
        <Polaroid src='/project-photos/sh-2.png' width={480} height={520}/>
        </div>
        <div className={styles.projectsColumnRight}>
        <Window
        txt1='SafeHouse bridges this gap between the host and the evacuee. Evacuees will now be able to get the help they need from those who can provide it in a safe and efficient way during a situation where time is critical.'
        txt2='Those willing to offer accommodations can register their space such as a room, suite, or even backyard as a “Safe House”. The application will provide a map in which icons will appear in locations where accommodations are available. Information such as the amount of space, whereabouts, and contact will be provided to evacuees, creating an efficient process to get them to a secure place in disaster situations.'/>
        </div>
        </div>

        <div className={styles.projectsRow}>

        <div className={styles.projectsColumnLeft}>
        <Window
        txt1='As a team, we conducted research on the current evacuation processes, and potential competitors and conducted a survey where 10 evacuees responded about their experience as evacuees. With this data, we created user personas to create two ideal users for our app. A host and evacuee.'
        txt2='Using ReactJS, we started constructing the web app using tools such as Storybook to create UI components, Google maps, Firebase authentication for profiles, and a NASA API.'/>
        </div>
        <Polaroid src='/project-photos/sh-3.png' width={280} height={520}/>
        </div>

        <Window txt1='SafeHouse is now a working web app that can be viewed in your preferred browser on any device. Currently, it does not have the facilities to be implemented however the plans to take it further is a current side project of mine.'
        txt2=' '/>

        <AppButton txt='Check it Out'  handleClick={() => window.location.href = 'https://www.safehouseapp.ca/'}/>
       
     
      </main>
      <Footer/>
    </div>
  )
}