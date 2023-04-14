import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Bubble from '../components/bubble'
import Window from '../components/window'
import Contact from '../components/contact'
import Portrait from '../components/portrait'
import Polaroid from '../components/polaroid'
import AppButton from '../components/button'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

import { IoIosDesktop } from "react-icons/io";
import {AiFillHtml5} from "react-icons/ai";
import  {SiJavascript, SiNextdotjs,  SiAdobe, } from "react-icons/si";
import {BsWordpress,BsFiletypeCs,} from "react-icons/bs";
import {CgFigma} from "react-icons/cg";
import {FaReact} from "react-icons/fa";

import Title from '../components/Title';
import Project from '../components/project'

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
            <Title txt="PROJECTS"/>
        </div>
      <main className={styles.main}>

          <Project txt='Weather App' src='/project-photos/wa-1.png' href='/projects/weather-app'/>
          <Project txt='Safe House' src='/project-photos/sh-1.png' href='/projects/safe-house'/>
          <Project txt='Safe House' src='/project-photos/sh-1.png' href='/projects/safe-house'/>

       
     
      </main>
      <Footer/>
    </div>
  )
}
