import Image from 'next/image'
import styles from './page.module.css'
import Tickets from './components/tickets'
import Welcome from './components/section_welcome'
import About from './components/section_about'
import Dates from './components/section_dates'
import Stage from './components/section_stage'
import Features from './components/section_features'
import Author from './components/section_author'
import Cast from './components/section_cast'

export default function Home() {
  return (
    <main className={styles.main}>
        <Welcome></Welcome>
        <About></About>
        <Dates></Dates>
        <Stage></Stage>
        <Features></Features>
        <Author></Author>
        <Cast></Cast>
        <div className="bg_fixed"></div>
    </main>
  )
}
