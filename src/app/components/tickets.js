'use client'
 
export default function Tickets() {
 
  return (
    <div className="tickets wrapper">
    <div className="ticket wrapper">
      <div className="left wrapper">
        <div className="date">12.10</div>
        <div className="price">20:00</div>
      </div>
      <div className="middle wrapper">
        <div className="city">Москва</div>
        <div className="venue">Крокус Сити Холл</div>
      </div>
      <div className="right wrapper">
        <a href="https://msk.kassir.ru/teatr/crocus-city-hall/sasha-petrov-dramaticheskoe-shou-planeta-maksimus_2023-10-12">Билеты</a>
      </div>
    </div>
    <div className="ticket wrapper">
      <div className="left wrapper">
        <div className="date">16.10</div>
        <div className="price">19:00</div>
      </div>
      <div className="middle wrapper">
        <div className="city">Санкт-Петербург</div>
        <div className="venue">БКЗ Октрябрьский</div>
      </div>
      <div className="right wrapper">
        <a href="https://spb.kassir.ru/koncert/sasha-petrov-planeta-maksimus">Билеты</a>
      </div>
    </div>
  </div>
  )
}