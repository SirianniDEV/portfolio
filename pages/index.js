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
            <Image className={styles.heroImg} src='/portrait-blue.png' width={800} height={700}/>
            {/* <div className={styles.portrait}>
                <div className={styles.portraitText}>
                <p>Digital Designer + Developer</p>
                <h1 className={styles.sofia}>SOFIA</h1>
                </div>
              <div className={styles.containerInner}>
                  <img
                    className={styles.circle}
                    src='/SVG/portrait-bg.svg'/> 
                  <img
                    className={styles.img1}
                    src='/SVG/portrait.svg' />
              </div>
          </div> */}
        </div>
      <main className={styles.main}>

        <div className={styles.aboutContainer}>

          <Title txt=" Web Developer and Digital Designer with a passion for translating ideas into reality."/>

          <div className={styles.about}>
            <div className={styles.aboutText}>
              <Window txt1="I am a creative thinker and problem solver, dedicated to delivering high-quality results. With a background in digital marketing, I decided to expand my skill set by studying in BCIT's Digital Design and Web Development program to focus on graphic design and discovered a passion for web development. "
                      txt2="As I still love analyzing data for marketing and designing assets for projects, I currently am working towards a career in developing websites. My previous experiences have shaped me into a well-rounded asset to any team that can contribute in numerous ways in different areas. I am always looking for opportunities to learn and expand my skills."/>
                <div className={styles.grid}>

                  <Bubble icon={<AiFillHtml5 />} width='70px' height='70px' iconSize='3rem' />
                  <Bubble icon={<BsFiletypeCs />}  width='70px' height='70px' iconSize='2.5rem'/>
                  <Bubble icon={<SiJavascript />}  width='70px' height='70px' iconSize='2.5rem' />
                  <Bubble icon={<FaReact />}  width='70px' height='70px' iconSize='3rem' />
                  <Bubble icon={<SiNextdotjs />}  width='70px' height='70px' iconSize='3rem' />
                  <Bubble icon={<CgFigma />}  width='70px' height='70px' iconSize='3rem'/>
                  <Bubble icon={<SiAdobe />}  width='70px' height='70px' iconSize='2.5rem'/>
                  <Bubble icon={<BsWordpress />}  width='70px' height='70px' iconSize='3rem'/>
                </div>
            </div>
              <Polaroid src='/working-at-desk.jpg' width={650} height={450}/>
          </div>
        </div>

        {/* <AppButton/> */}


        {/* <Contact /> */}
     
      </main>
      <Footer/>
    </div>
  )
}
