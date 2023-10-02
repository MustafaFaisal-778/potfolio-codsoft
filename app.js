// let  card=document.getElementById("project1");
// let info=document.getElementById("info1");

// card.addEventListener('mouseenter',()=>{
//     info.style.display="block"
// })
// card.addEventListener('mouseleave',()=>{
//     info.style.display="none"
// })


function handleResize() {
    let section1=document.getElementById("div-change");
    const innerWidth = window.innerWidth;
    const outerWidth = window.outerWidth;

    if (innerWidth < 850 ) {
         section1.innerHTML=`<div class="dev-info ">
         <h1>Hi all! I'm <span style="color:rgba(177, 48, 242, 1.0);text-shadow: 2px 2px 6px rgb(0 0 0 / 60%);">Mustafa Faisal</span>
         </h1>
         <div class="img">
           <!-- <img  src="21dafb3a-8b48-463f-b7dd-e5ced987f2ce.png" alt=""> -->
           <div class="test">
 
           </div>
         </div>
 
         <p>
           A passionate FrontEnd Software Developer 🚀 having an experience of building Web and mobile applications with
           JavaScript / Reactjs / Nextjs and some other cool libraries and frameworks.
         </p>
         <div class="icon">
 
           <a href="https://www.linkedin.com/in/mustafa-faisal-673a95264/" class="icon-edit linkdin"  target="_blank">
             <i class="fab fa-linkedin-in"></i>
           </a>
           <a href="https://github.com/MustafaFaisal-778" class="icon-edit github"   target="_blank">
             <i class="fab fa-github"></i>
           </a>
           <a href="mailto:faisalmustafa067@gmail.com" class="icon-edit mail" target="_blank">
             <i class="fas fa-envelope"></i>
           </a>
 
 
 
         </div>
       </div>
 
     </div>`
    } 
    
    else if (innerWidth >= 768 && outerWidth < 1200) {
        // Adjust layout for medium-sized screens
    } else {
        section1.innerHTML=`<div class="dev-info animateLeft">
        <h1>Hi all! I'm <span style="color:rgba(177, 48, 242, 1.0);text-shadow: 2px 2px 6px rgb(0 0 0 / 60%);">Mustafa Faisal</span>
        </h1>
        <p>
          A passionate FrontEnd Software Developer 🚀 having an experience of building Web and mobile applications with
          JavaScript / Reactjs / Nextjs and some other cool libraries and frameworks.
        </p>
        <div class="icon">

          <a href="https://www.linkedin.com/in/mustafa-faisal-673a95264/" target="_blank" class="icon-edit linkdin">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/MustafaFaisal-778" target="_blank" class="icon-edit github">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:faisalmustafa067@gmail.com" target="_blank" class="icon-edit mail">
            <i class="fas fa-envelope"></i>
          </a>



        </div>
      </div>
      <div class="img animateRight">
        
        <div class="test">

        </div> `
    }
}


window.addEventListener('resize', handleResize);


handleResize();



// let project1=document.getElementById("project1")

// let info1=document.getElementById("info1");

// project1.addEventListener("mouseenter",()=>{

//   info1.style.display="block";
// })
// project1.addEventListener("mouseleave",()=>{
//   info1.style.display="none";
// })




//  let project2=document.querySelectorAll(".card")

// let info2=document.querySelectorAll(".project-info");

// project2.addEventListener("mouseenter",()=>{

//   info2.style.display="block";
// })
// project2.addEventListener("mouseleave",()=>{
//   info2.style.display="none";
// })


// ..............................
