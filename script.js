window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});


const text = [
    "AI Enthusiast",
    "Frontend Developer",
    "Open Source Contributor",
    "Campus Ambassador"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            erase();

        }, 1500);

    } else {

        setTimeout(type, 120);

    }

})();

function erase() {

    letter = currentText.slice(0, --index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === 0) {

        count++;

        setTimeout(type, 300);

    } else {

        setTimeout(erase, 60);

    }

}

//    ACTIVE NAVBAR


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

//    SCROLL ANIMATION


const cards = document.querySelectorAll(
".skillCard,.projectCard,.achievementCard,.expCard,.timelineCard,.counterBox"
);

window.addEventListener("scroll", reveal);

function reveal(){

cards.forEach(card=>{

const windowHeight=window.innerHeight;

const revealTop=card.getBoundingClientRect().top;

if(revealTop<windowHeight-120){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

}

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

});


//    COUNTER

const counters = document.querySelectorAll(".counterBox h2");

let started = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const top = counterSection.offsetTop - 300;

    if (scrollY >= top && !started) {

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let start = 0;

            const speed = target / 50;

            const update = () => {

                start += speed;

                if (start < target) {

                    counter.innerText = Math.floor(start) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

        started = true;

    }

});


const profile = document.querySelector(".heroImage img");

profile.addEventListener("mousemove", () => {

profile.style.transform="scale(1.05) rotate(2deg)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1)";

});

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

this.appendChild(circle);

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

circle.style.left=x+"px";

circle.style.top=y+"px";

setTimeout(()=>{

circle.remove();

},600);

});

});
console.log("Welcome to Shravani Dhote Portfolio 🚀");