const enterBtn = document.getElementById("enter-btn");
const loader = document.getElementById("loader");
const music = document.getElementById("bg-music");

music.volume = 0.3;

setTimeout(() => {
  enterBtn.style.display = "block";
}, 3500);

enterBtn.addEventListener("click", async () => {
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 800);

  try { await music.play(); } catch(e) {}
});


// SCROLL REVEAL
const sections = document.querySelectorAll(".section");

function reveal() {
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight * 0.85){
      sec.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();


// PARTICLES (LIGHT)
const particles = document.getElementById("particles");

for(let i=0;i<25;i++){
  const p = document.createElement("div");
  p.style.cssText = `
    position:absolute;
    width:5px;height:5px;
    background:#ff8de1;
    border-radius:50%;
    left:${Math.random()*100}vw;
    top:${Math.random()*100}vh;
    opacity:${Math.random()*0.7};
    animation:float ${5+Math.random()*6}s linear infinite;
  `;
  particles.appendChild(p);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float{
  0%{transform:translateY(0)}
  50%{transform:translateY(-60px)}
  100%{transform:translateY(0)}
}`;
document.head.appendChild(style);


// COUNTDOWN SAFE
const birthday = new Date("July 1, 2026").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const d = birthday - now;

  if(d<=0){
    document.querySelector(".ending-text").innerText =
      "Happy Birthday Claudia 🎉💜";
    return;
  }

  document.getElementById("days").innerText =
    Math.floor(d/(1000*60*60*24));

  document.getElementById("hours").innerText =
    Math.floor((d%(1000*60*60*24))/(1000*60*60));

  document.getElementById("minutes").innerText =
    Math.floor((d%(1000*60*60))/(1000*60));

  document.getElementById("seconds").innerText =
    Math.floor((d%(1000*60))/1000);

},1000);


// AI
const btn = document.getElementById("ask-btn");
const out = document.getElementById("chat-output");
const input = document.getElementById("user-input");

function ask(){
  const q = input.value.toLowerCase();

  let r = "Joe AI is thinking 🤖💜";

  if(q.includes("beautiful")) r = "Even galaxies feel insecure ✨";
  if(q.includes("future")) r = "Bright, unstoppable 🌌";
  if(q.includes("fries")) r = "Gone 🍟";

  out.innerText = r;
}

btn.onclick = ask;
input.addEventListener("keypress", e => {
  if(e.key==="Enter") ask();
});
