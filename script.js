// LOADER
const enterBtn =
document.getElementById("enter-btn");

const loader =
document.getElementById("loader");

const music =
document.getElementById("bg-music");

music.volume = 0.3;

setTimeout(() => {
  enterBtn.style.display = "block";
}, 4000);

enterBtn.addEventListener("click", async () => {

  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);

  try{
    await music.play();
  }

  catch(err){
    console.log(err);
  }

});


// SCROLL REVEAL
const sections =
document.querySelectorAll(".section");

function revealSections(){

  sections.forEach(section => {

    const top =
    section.getBoundingClientRect().top;

    const trigger =
    window.innerHeight * 0.85;

    if(top < trigger){
      section.classList.add("show");
    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();


// PARTICLES
const particles =
document.getElementById("particles");

for(let i = 0; i < 30; i++){

  const particle =
  document.createElement("div");

  particle.style.cssText = `
    position:absolute;
    width:5px;
    height:5px;
    background:#ff8de1;
    border-radius:50%;
    left:${Math.random()*100}vw;
    top:${Math.random()*100}vh;
    opacity:${Math.random()};
    animation:float ${5 + Math.random()*6}s linear infinite;
  `;

  particles.appendChild(particle);

}

const style =
document.createElement("style");

style.innerHTML = `
@keyframes float{

  0%{
    transform:translateY(0);
  }

  50%{
    transform:translateY(-60px);
  }

  100%{
    transform:translateY(0);
  }

}
`;

document.head.appendChild(style);


// COUNTDOWN
const birthday =
new Date("July 1, 2026 00:00:00")
.getTime();

setInterval(() => {

  const now =
  new Date().getTime();

  const distance =
  birthday - now;

  if(distance <= 0){

    document.querySelector(".ending-text")
    .innerText =
    "Happy Birthday Claudia 🎉💜";

    return;
  }

  document.getElementById("days")
  .innerText =
  Math.floor(
    distance /
    (1000 * 60 * 60 * 24)
  );

  document.getElementById("hours")
  .innerText =
  Math.floor(
    (distance %
    (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  document.getElementById("minutes")
  .innerText =
  Math.floor(
    (distance %
    (1000 * 60 * 60)) /
    (1000 * 60)
  );

  document.getElementById("seconds")
  .innerText =
  Math.floor(
    (distance %
    (1000 * 60)) / 1000
  );

}, 1000);


// JOE AI
const askBtn =
document.getElementById("ask-btn");

const output =
document.getElementById("chat-output");

const input =
document.getElementById("user-input");

function askAI(){

  const q =
  input.value.toLowerCase();

  let response =
  "Joe AI is thinking 🤖💜";

  if(q.includes("beautiful")){
    response =
    "Even galaxies feel insecure ✨";
  }

  else if(q.includes("future")){
    response =
    "Bright, unstoppable 🌌";
  }

  else if(q.includes("fries")){
    response =
    "Gone 🍟";
  }

  output.innerText =
  response;

}

askBtn.addEventListener(
  "click",
  askAI
);

input.addEventListener(
  "keypress",
  e => {

    if(e.key === "Enter"){
      askAI();
    }

  }
);
