let texts = [];
async function fetchData() {
  try {
    let data = await fetch("azkar_masaa.json");
    texts = await data.json();
  } catch (error) {
    console.log(`reason is ${error}`);
  }
}
async function createContent() {
  await fetchData();
  let section = document.querySelector(".landing-area");
  // add title
  let title = document.createElement("div");
  title.setAttribute("class", "title");
  let titleSpan = document.createElement("span");
  titleSpan.setAttribute("class", "titl");
  titleSpan.innerHTML = "اذكار المساء";
  title.appendChild(titleSpan);
  section.appendChild(title);
  for (let i = 0; i < texts.length; i++) {
    // add div in section
    let mainContainer = document.createElement("div");
    mainContainer.setAttribute("class","content-box");
    section.appendChild(mainContainer);
    // add content in div
    let content = document.createElement("div");
    content.setAttribute("class","content");
    // get text
    //first text
    if (texts[i].firstText !== "") {
      let fristContainer = document.createElement("div");
      fristContainer.setAttribute("class", "firstContainer");
      let firsttext = document.createTextNode(`${texts[i].firstText}`);
      content.appendChild(fristContainer);
      fristContainer.appendChild(firsttext);
    }

    // main text
    let mainTextContainer = document.createElement("div");
    mainTextContainer.setAttribute("class", "mainTextContainer");
    let maintext = document.createTextNode(`${texts[i].mainText}`);
    mainTextContainer.appendChild(maintext);
    content.appendChild(mainTextContainer);
    // source of text
    if (texts[i].sourceText !== "") {
      let sourceTextcontainer = document.createElement("span");
      sourceTextcontainer.setAttribute("class", "sourceTextcontainer");
      let sourceText = document.createTextNode(`${texts[i].sourceText}`);
      sourceTextcontainer.appendChild(sourceText);
      content.appendChild(sourceTextcontainer);
    }

    //info text
    if (texts[i].infoText !== "") {
      let infoTextcontainer = document.createElement("span");
      infoTextcontainer.setAttribute("class", "infoTextcontainer");
      let infoText = document.createTextNode(`${texts[i].infoText}`);
      infoTextcontainer.appendChild(infoText);
      content.appendChild(infoTextcontainer);
    }
    // add counter in div
    let countercontainer = document.createElement("div");
    let counter = document.createElement("div");
    let counterSpan = document.createElement("span");
    counterSpan.setAttribute("class", "counterSpan");
    countercontainer.setAttribute("class", "countercontainer");
    counter.setAttribute("class", `counter`);
    // check if there is data in localStorge 
        counterSpan.innerHTML = `${texts[i].count}`;     
  
    counter.appendChild(counterSpan);
    countercontainer.appendChild(counter);
    content.appendChild(countercontainer);
    // adding resetIcon in counter
    let resetIcon = document.createElement("div")
    resetIcon.setAttribute("class","reset")
    resetIcon.innerHTML=`<i class="fa-solid fa-rotate-right"></i>`
    countercontainer.appendChild(resetIcon)
    mainContainer.appendChild(content);
      //get reset element 
      let reset = document.querySelectorAll(".reset") 
      let counterSpans = document.querySelectorAll(".counterSpan") 
        reset.forEach((reset,i) => {
          reset.addEventListener("click", ()=>{
            counterSpans.forEach((span,index)=>{
              if (i===index) {
                span.innerHTML=texts[index].count
              }
            })
          })
          
        });
        // adding minusIcon in counter
        let minusIcon = document.createElement("div")
        minusIcon.setAttribute("class","minus")
        minusIcon.innerHTML=`<i class="fa-solid fa-minus fa-2xs"></i>`
        countercontainer.appendChild(minusIcon)
      }
    let date = new Date();
    let footer = document.querySelector("footer");
    let span = document.createElement("span");
    let footer_text = document.createTextNode(
      `Made By Mohamed © ${date.getFullYear()}`
      );
      span.appendChild(footer_text);
      footer.appendChild(span);
      let contact_links = document.createElement("div")
      contact_links.className = "contact-links";
      contact_links.innerHTML=`
      <i class="fa-brands fa-facebook"></i> 
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-github "></i>
      `
      footer.appendChild(contact_links)
      let icons = document.querySelectorAll(".contact-links i")
      icons.forEach((icon)=>{
        icon.addEventListener("mouseenter",()=>{
          icon.classList.add("fa-bounce")
        })
        icon.addEventListener("mouseleave",()=>{
          icon.classList.remove("fa-bounce")
        })
      })
     // add arrow event
      let arrows = document.querySelectorAll(".arrow")
      arrows.forEach((arrow)=>{
        arrow.addEventListener("mouseenter",()=>{
          arrow.classList.add("fa-bounce")
        })
        arrow.addEventListener("mouseleave",()=>{
          arrow.classList.remove("fa-bounce")
        })
      })
      
 }
 
async function plus_minus() {
  await createContent();
  let Count = document.querySelectorAll(".counter");
  let counterSpans = document.querySelectorAll(".counterSpan");
  Count.forEach((count, index) => {
    count.addEventListener("click", () => {
      counterSpans.forEach((counterSpan, i) => {
        if (i === index) {
          if (counterSpan.innerHTML>0) {
            counterSpan.innerHTML -=1;
            // run function which send data to localStorge
            // let content_box = document.querySelectorAll(".content-box")
            // content_box.forEach((element,ind)=>{
              // if (ind===i) {
                // let content_box_after = window.getComputedStyle(element,"::after")
              // content_box_after.width = "10px"
              // console.log(content_box_after)
              // content_box_after.width = `${100-((counterSpan.innerHTML/texts[ind].count)*100)}%`
              // }
            // })

          //   if (counterSpan.innerHTML===0) {
          //   count.style.backgroundColor = "#00bfff54"
          //  }
          }
        }
      });
    });
  });
  let minus = document.querySelectorAll(".minus") 
  minus.forEach((minus, index) => {
    minus.addEventListener("click", () => {
      counterSpans.forEach((counterSpan, i) => {
        if (i === index) {
            counterSpan.innerHTML = +counterSpan.innerHTML+1;
        }
      });
    });
  });
}
plus_minus();
let zekr_links = document.querySelector(".azkar_links");
let zekr_li = document.querySelector(".azkar-li");
zekr_li.addEventListener("click", () => {
  if (zekr_links.style.display === "flex") {
    zekr_links.style.display = "none";
  } else {
    zekr_links.style.display = "flex";
  }
});
zekr_links.addEventListener("click",()=>{
  zekr_links.style.display="flex";
})
// get all link container 
let main_li =document.querySelectorAll(".main-li")
let divPart1 =document.querySelector(".part1") 
let divPart =document.querySelectorAll(".part") 
let divPart2 =document.querySelector(".part2") 
let divPart3 =document.querySelector(".part3") 
let more_1 =document.querySelector(".li-part1") 
let more_part2 =document.querySelector(".li-part2") 
let more_part3 =document.querySelector(".li-part3") 
let more_li = document.querySelectorAll(".more")
let back_li = document.querySelectorAll(".back")
main_li.forEach((li)=>{
li.addEventListener("click",()=>{
  main_li.forEach((li)=>{
    li.removeAttribute("data-click")
  })
  li.setAttribute("data-click","click")
})
})
function add_active_and_check(div,index,more_back_class) {
  div.forEach((el)=>{
   el.removeAttribute("data-active")
  })
  div.forEach((ele,i)=>{
    if (more_back_class==="more") {
      if (index===i) {
        ele.nextElementSibling.setAttribute("data-active","active")
      }
    }    
    // }
    else if (more_back_class==="back") {
      // remember count of back 2 and the count of div 3
      if (index+1===i) {
      ele.previousElementSibling.setAttribute("data-active","active")
    }
  }
})
divPart.forEach((div)=>{
  if (div.getAttribute("data-active")==="active") {
    div.style.display="block";
}
else{
  div.style.display="none";
}
})
}

  more_li.forEach((li,index)=>{
    li.addEventListener("click",()=>{
      add_active_and_check(divPart,index,li.classList[1])
    })  
  }
  )
  back_li.forEach((back,index)=>{
    back.addEventListener("click",()=>{
      add_active_and_check(divPart,index,back.classList[1])  
    })})

// add scroll progress 
// let scroll_container = document.querySelector(".scroll-progress");
// let scroll_percente = document.documentElement.scrollHeight - document.documentElement.clientHeight ;
// console.log(scroll_percente)
let header = document.querySelector("header")
window.addEventListener("scroll",()=>{
  if (window.scrollY > header.clientHeight) {
    header.style.position="fixed"
    header.style.backgroundColor = "#15acdf";
    header.style.boxShadow = "0px 0 12px 4px #0000006b"
    // header.style.display = "flex"
  }
  else {
    header.style.position="static"
    // header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none"
    // header.style.display = "none";
  }
})
