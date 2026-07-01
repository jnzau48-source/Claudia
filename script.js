// =====================
// LOADER
// =====================

const enterBtn =
document.getElementById("enter-btn");

const loader =
document.getElementById("loader");

const music =
document.getElementById("bg-music");

music.volume = 0.3;

setTimeout(() => {

  enterBtn.style.display = "inline-block";

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

// =====================
// SCROLL REVEAL
// =====================

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

// =====================
// PARTICLES
// =====================

const particles =
document.getElementById("particles");

for(let i = 0; i < 35; i++){

  const particle =
  document.createElement("div");

  particle.style.cssText = `
    position:absolute;
    width:${2 + Math.random()*5}px;
    height:${2 + Math.random()*5}px;
    background:#ff8de1;
    border-radius:50%;
    left:${Math.random()*100}vw;
    top:${Math.random()*100}vh;
    opacity:${Math.random()};
    animation:float ${5 + Math.random()*8}s linear infinite;
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
    transform:translateY(-80px);
  }

  100%{
    transform:translateY(0);
  }

}

`;

document.head.appendChild(style);

// =====================
// JOE AI
// =====================

const chatWindow =
document.getElementById("chat-window");

const choiceBtns =
document.querySelectorAll(".choice-btn");

const replies = {

  "Miss me?":
  "Suspicious question. But yes 💜",

"Start chaos":
"You entered the chat and suddenly the atmosphere changed ✨",

  "Tell me something sweet":
  "You have the kind of smile that ruins concentration levels."
};

function addMessage(text, sender){

  const message =
  document.createElement("div");

  message.classList.add(
    "message",
    sender
  );

  message.innerText = text;

  chatWindow.appendChild(message);

  chatWindow.scrollTop =
  chatWindow.scrollHeight;

}

choiceBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    const text =
    btn.innerText;

    addMessage(
      text,
      "user"
    );

    setTimeout(() => {

      addMessage(
        replies[text],
        "joe"
      );

    }, 700);

  });

});

// =====================
// LETTER TYPEWRITER
// =====================

const typedLetter =
document.getElementById("typed-letter");

const letter = `

Dear Claudia,

Happy Birthday 💜

I hope this year becomes one of those years you look back at and smile without even realizing it.

You are genuinely one of the most interesting people I’ve met.
Not because you try too hard.
Actually the opposite.

You just exist naturally with this calm chaos around you.
One minute soft.
Next minute dangerous to peace and concentration levels.

Your smile has side effects by the way.
Scientifically unexplainable.

I also think it’s beautiful how you carry your energy.
You make moments feel lighter.
Even ordinary conversations somehow become memorable.

And honestly?
I hope life becomes kinder to you this year.

I hope opportunities find you.
I hope your confidence grows louder.
I hope your dreams stop feeling distant.

Most importantly...
I hope you never lose the part of you that makes you uniquely Claudia.

Thank you for existing in my timeline 💜

Happy 19.

`;

let i = 0;

function typeLetter(){

  if(i < letter.length){

    typedLetter.innerHTML +=
    letter.charAt(i);

    i++;

    setTimeout(
      typeLetter,
      35
    );

  }

}

window.addEventListener("load", () => {

  setTimeout(() => {

    typeLetter();

  }, 2500);

});
