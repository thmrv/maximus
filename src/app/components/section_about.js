'use client'

let currentSlide = 1;

export default function About() {
  const play = (e) => {
    e.currentTarget.innerHTML = '';
    e.currentTarget.style.background = 'none';
  }
  return (
    <div className="section section-about">
      <div className="sectionfix">
      <video width="100%" poster="/assets/images/thumbnail.png" height="100%" controls><source src="/assets/videos/invitation.mp4" type="video/mp4"></source>Видео не поддерживается.</video>
        <div className="gallery wrapper">
          <img
            src="../assets/images/title_gallery.svg"
            alt="Галерея"
            className="gallery"
          />
        </div>
        <div className="gallery grid">
          <div id="gallery_block_1" numid="1" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_1.jpg"></img></div>
          <div id="gallery_block_2" numid="2" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_2.jpg"></img></div>
          <div id="gallery_block_3" numid="3" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_3.jpg"></img></div>
          <div id="gallery_block_4" numid="4" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_4.jpg"></img></div>
          <div id="gallery_block_5" numid="5" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_5.jpg"></img></div>
          <div id="gallery_block_6" numid="6" onClick={(e) => {openModal(e)}} className="image-wrapper grid_block"><img src="../assets/images/gallery_6.jpg"></img></div>
        </div>
      </div>
      <div className="arrows wrapper">
        <div numid={1} onClick={(e) => {openModal(e, true)}} className="arrow left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></div>
        <div numid={3} onClick={(e) => {openModal(e, true)}} className="arrow right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_1">
        <img className="gallery modal-image" src="../assets/images/gallery_1.jpg"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_2">
        <img className="gallery modal-image" src="../assets/images/gallery_2.jpg"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_3">
        <img className="gallery modal-image" src="../assets/images/gallery_3.jpg"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_4">
        <img className="gallery modal-image" src="../assets/images/gallery_4.jpg"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_5">
        <img className="gallery modal-image" src="../assets/images/gallery_5.jpg"></img>
      </div>
      <div className="gallery modal" onClick={(e) => {closeModal(e)}} id="modal_gallery_6">
        <img className="gallery modal-image" src="../assets/images/gallery_6.jpg"></img>
      </div>
    </div>
  )
}

function openModal(e, forArrow = false){
  document.querySelector(".arrows.wrapper").style.display = "flex";
  let slideCount = document.querySelectorAll(".gallery.modal").length;
  const currentId = e.currentTarget.getAttribute("numid");
  if (forArrow){
    closeModal(e, true, true);

  } 
  document.querySelector("#modal_gallery_" + currentId).style.display = "flex";
  currentSlide = currentId;
  document.querySelector(".arrow.left").setAttribute("numid", currentSlide == 1 ? currentSlide : parseInt(currentSlide) - 1);
  document.querySelector(".arrow.right").setAttribute("numid", currentSlide == slideCount ? currentSlide : parseInt(currentSlide) + 1);
  document.querySelector(".arrows.wrapper").style.display = "flex";
  console.log(currentSlide)
}

function closeModal(e, all = false, forArrow = false){
  forArrow ? document.querySelector(".arrows.wrapper").style.display = "flex" : document.querySelector(".arrows.wrapper").style.display = "none";
  if (all) {
    document.querySelectorAll('.gallery.modal').forEach((modal) => {
      modal.style.display = "none";
    })
  }else{
  e.currentTarget.style.display = "none";
  }
}