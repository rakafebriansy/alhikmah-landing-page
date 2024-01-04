const html = document.querySelector('html');
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const backToTop = document.querySelector('#back-to-top');
const darkToggle = document.querySelector('#dark-toggle');
const bacaSelengkapnya = [];
for (let i = 0; i<3; i++){
    bacaSelengkapnya[i] = document.querySelector(`#baca-selengkapnya${i}`);
}

//NAVBAR SCROLL
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        backToTop.classList.remove('hidden');
        backToTop.classList.add('flex');
    } else{
        header.classList.remove('navbar-fixed');
        backToTop.classList.remove('flex');
        backToTop.classList.add('hidden');
    }
};

//HAMBURGER MENU
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click',function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

//DARK MODE BUTTON
darkToggle.addEventListener('click',function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked=true;
} else {
      darkToggle.checked=false;
}


//TYPING ANIMATION
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms));
}
const phrases = ['Mahasiswa', 'Gamer', 'Developer'];
const typewriter = document.querySelector('#typewriter')
let sleepTime = 100;
let curPhraseIndex = 0;
const writeLoop = async () => {
    while(true){
        let curWord = phrases[curPhraseIndex];
        console.log('ok')

        for (let i=0; i < curWord.length; i++){
            typewriter.innerText = curWord.substring(0, i+1);
            await sleep(sleepTime);
        }
        
        await sleep(sleepTime*10);
        
        for (let i=curWord.length; i>0; i--){
            typewriter.innerText = curWord.substring(0, i-1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime*5);

        if (curPhraseIndex === phrases.length - 1){
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};
writeLoop();

//TRUNCATE PROJECT DESCRIPTION
for (let i = 0; i < bacaSelengkapnya.length; i++){
    let obj = bacaSelengkapnya[i];
    obj.addEventListener('click',function(){
        obj.parentNode.classList.toggle('project-desc');
    if (obj.innerText == 'Baca Selengkapnya') {
        obj.innerText = 'Lebih Sedikit'
    } else {
        obj.innerText = 'Baca Selengkapnya'
    }
    })
}