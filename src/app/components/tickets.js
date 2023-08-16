'use client'
 
export default function Tickets() {
 
  return (
    <div className="tickets wrapper">
    <div className="ticket wrapper">
      <div className="left wrapper">
        <div className="date">12.10</div>
        <div className="price">2000</div>
      </div>
      <div className="middle wrapper">
        <div className="city">Москва</div>
        <div className="venue">Крокус Сити Холл</div>
      </div>
      <div className="right wrapper">
        <a href="#">Билеты</a>
      </div>
    </div>
    <div className="ticket wrapper">
      <div className="left wrapper">
        <div className="date">16.10</div>
        <div className="price">1900</div>
      </div>
      <div className="middle wrapper">
        <div className="city">Санкт-Петербург</div>
        <div className="venue">БКЗ Октрябрьский</div>
      </div>
      <div className="right wrapper">
        <a href="#">Билеты</a>
      </div>
    </div>
  </div>
  )
}