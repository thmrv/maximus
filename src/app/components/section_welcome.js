'use client'

import Tickets from "./tickets"

 
export default function Welcome() {
 
  return (
<div className="section section-welcome">
<div className="welcome overlay wrapper">
  <div className="welcome title_block wrapper">
    <div className="welcome title_block">
      <div className="welcome upper_text animate__animated animate__fadeInDown">Новое <br></br>драматическое шоу</div>
      <div className="welcome lower_text animate__animated animate__fadeIn">САШИ<br></br> ПЕТРОВА</div>
    </div>
  </div>
  <div className="image-wrapper animate__animated animate__fadeInDown">
    <img
      src="../assets/images/PLANETAMAXIMUS_logo.png"
      alt="MAXIMUS"
      className="maximus_logo_big"
    />
  </div>
  <div className="welcome quote animate__animated animate__fadeInUp">«У каждого лепестка есть похожий лепесток»</div>
  <Tickets></Tickets>
</div>
<div className="image-wrapper">
  <img
    src="../assets/images/section_01-fore.png"
    alt="PLANETA_MAXIMUS"
    className="welcome_foreground"
  />
</div>
</div>
  )
}