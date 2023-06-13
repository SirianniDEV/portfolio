import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppButton from '../components/button'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import CircleImage from '../components/CircleImage'
import SocialLinks from '../components/SocialLinks'
import Title from '../components/Title';
import AppText from '../components/AppText'

export default function Links() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Sofia Siriani - Portfolio</title>
        <meta content="Sofia Siriani - Portfolio" />
        <link rel="icon" href="/S-favicon.png" />
      </Head>

      {/* <div className={styles.heroHeader}>
             <Navigation/>
      </div> */}
        <CircleImage src='/portrait-02.jpg'/>

            <Title txt="Hi, I'm Sofia!"/>
            <AppText  txt=" Digital designer and web developer." align='center' color='#8FB6FF'/>
            <br/>
            <br/>
            <AppButton txt='Check out my portfolio!'/>
            <AppButton txt='My latest project'/>
            <AppButton txt='Read My Blog'/>
            <AppButton txt='My Resume'/>
            <AppButton txt='Contact me'/>
          <SocialLinks/>
    </div>
  )
}