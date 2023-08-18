'use client'

export default function About() {
  const play = (e) => {
    e.currentTarget.innerHTML = '<iframe width="100%" height="200" src="https://www.youtube.com/embed/Vt4eZntf85Q" frameborder="0"></iframe>';
    e.currentTarget.style.background = 'none';
  }
  return (
    <div className="section section-about">
      <div className="sectionfix">
        <div onClick={(e) => { play(e) }} id="vidwrap"></div>
        <div className="gallery wrapper">
          <img
            src="../assets/images/title_gallery.svg"
            alt="Галерея"
            className="gallery"
          />
        </div>
        <div className="gallery grid">
          <div id="gallery_block_1" numId="1" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_1.png"></img></div>
          <div id="gallery_block_2" numId="2" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_2.png"></img></div>
          <div id="gallery_block_3" numId="3" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_3.png"></img></div>
          <div id="gallery_block_4" numId="4" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_4.png"></img></div>
          <div id="gallery_block_5" numId="5" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_5.png"></img></div>
          <div id="gallery_block_6" numId="6" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_6.png"></img></div>
        </div>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_1">
        <img className="gallery modal-image" src="../assets/images/gallery_1.png"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_2">
        <img className="gallery modal-image" src="../assets/images/gallery_2.png"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_3">
        <img className="gallery modal-image" src="../assets/images/gallery_3.png"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_4">
        <img className="gallery modal-image" src="../assets/images/gallery_4.png"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_5">
        <img className="gallery modal-image" src="../assets/images/gallery_5.png"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_6">
        <img className="gallery modal-image" src="../assets/images/gallery_6.png"></img>
      </div>
    </div>
  )
}

function openModal(e){
  const currentId = e.currentTarget.getAttribute("numId");
  document.querySelector("#modal_gallery_" + currentId).style.display = "flex";
}

function closeModal(e){
  e.currentTarget.style.display = "none";
}