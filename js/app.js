const landing=document.getElementById("landing");

const story=document.getElementById("story");

const gallery=document.getElementById("gallery");

const gift=document.getElementById("gift");

const typing=document.getElementById("typing");

const cards=document.querySelectorAll(".photo-card");

const cake=document.getElementById("cake");

const letter=document.getElementById("letter");

const letterText=document.getElementById("letterText");

const finale=document.getElementById("finale");

let currentCard=0;

gift.addEventListener("click",()=>{

const music = document.getElementById("music");

music.play().catch(()=>{});

gift.classList.add("open");

setTimeout(()=>{

landing.classList.remove("active");

story.classList.add("active");

typeWriter();

},900);

});

function typeWriter(){

const text="Every beautiful friendship begins with one small hello... ❤️";

typing.innerHTML="";

let i=0;

const timer=setInterval(()=>{

typing.innerHTML+=text.charAt(i);

i++;

if(i===text.length){

clearInterval(timer);

setTimeout(()=>{

story.classList.remove("active");

gallery.classList.add("active");

showCards();

},1800);

}

},45);

}

function showCards(){

    cards.forEach(card=>card.classList.remove("active-card"));
    
    cards[currentCard].classList.add("active-card");
    
    setTimeout(()=>{
    
    currentCard++;
    
    if(currentCard<cards.length){
    
    showCards();
    
    }
    else{
    
    gallery.classList.remove("active");
    
    cake.classList.add("active");
    
    setTimeout(()=>{
    
    cake.classList.remove("active");
    
    letter.classList.add("active");
    
    showLetter();
    
    },5000);
    
    }
    
    },3000);
    
    }

    function showLetter(){

        const text=`Dear kutreeeyy,
    
    ky mahit kidhar se ayii tu merii ilfe me pnn ... but tuch changleyy bhai.
    
    and mala tuzya sobt ludo khelayb avdt but mereko harna pasand nhiiii terese .
    
    I hope tu tuzya bdayy enjoy krchilll mla sodunnnn .
    
    Sod Keep smiling, keep shining, and never stop being the amazing person you are.

    Bhai evdi chatgpt keley ......
    
    Happy Birthday! ❤️`;
    
        let i=0;
    
        letterText.innerHTML="";
    
        const timer=setInterval(()=>{
    
            letterText.innerHTML+=text.charAt(i);
    
            i++;
    
            if(i>=text.length){
    
                clearInterval(timer);
    
                setTimeout(()=>{
    
                    letter.classList.remove("active");
    
                    finale.classList.add("active");
    
                    createConfetti();
    
                    startFireworks();
    
                },5000);
    
            }
    
        },35);
    
    }
    function createConfetti(){

        const box=document.querySelector(".confetti");
        
        for(let i=0;i<120;i++){
        
        const piece=document.createElement("span");
        
        piece.style.left=Math.random()*100+"%";
        
        piece.style.animationDuration=(Math.random()*3+2)+"s";
        
        piece.style.background=
        `hsl(${Math.random()*360},100%,60%)`;
        
        box.appendChild(piece);
        
        }
        
        }
        
        function startFireworks(){
        
        const canvas=document.getElementById("fireworks");
        
        const ctx=canvas.getContext("2d");
        
        canvas.width=window.innerWidth;
        
        canvas.height=window.innerHeight;
        
        function burst(){
        
        const x=Math.random()*canvas.width;
        
        const y=Math.random()*canvas.height*0.6;
        
        for(let i=0;i<70;i++){
        
        const angle=Math.random()*Math.PI*2;
        
        const length=Math.random()*100;
        
        ctx.beginPath();
        
        ctx.moveTo(x,y);
        
        ctx.lineTo(
        
        x+Math.cos(angle)*length,
        
        y+Math.sin(angle)*length
        
        );
        
        ctx.strokeStyle=`hsl(${Math.random()*360},100%,60%)`;
        
        ctx.stroke();
        
        }
        
        }
        
        setInterval(()=>{
        
        ctx.clearRect(0,0,canvas.width,canvas.height);
        
        burst();
        
        },600);
        
        }