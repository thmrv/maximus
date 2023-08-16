'use client'

import Tickets from "./tickets"

 
export default function Stage() {
 
  return (
    <div className="section section-stage">
    <div className="stage upper text outer">
      <div className="stage upper text suptitle">Впервые этот формат<br></br> был исполнен в постановке</div>
      <div className="stage upper text title">#ЗАНОВОРОДИТЬСЯ</div>
      <div className="stage upper text suptitle">которая за три года проката<br></br> по России собрала несколько</div>
      <div className="stage upper text subtitle">ДЕСЯТКОВ ТЫСЯЧ <br></br>ЗРИТЕЛЕЙ</div>
    </div>
    <div className="image-wrapper">
      <img
        src="../assets/images/section_04-fore-mix-blend.png"
        alt="PLANETA_MAXIMUS"
        className="04_foreground"
      />
    </div>
    <div className="stage lower text outer">
      <div className="stage lower text suptitle">Премьера «Планеты Максимус» успешно прошла в декабре 2022 года на сцене Театра Ермоловой</div>
      <div className="stage lower text suptitle">В октябре 2023 года моноспектакль выходит на</div>
      <div className="stage lower text title">НОВЫЙ МАСШТАБ БОЛЬШИХ ПЛОЩАДОК</div>
    </div>
  </div>
  )
}