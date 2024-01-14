
const darkToggle = document.querySelector('#dark-toggle');

//NAVBAR SCROLL
window.onscroll = function(){
    const HEADER = $('HEADER');
    const FIXED_NAV = HEADER[0].offsetTop;
    if(window.pageYOffset > FIXED_NAV) {
        HEADER.addClass('navbar-fixed');
    } else{
        HEADER.removeClass('navbar-fixed');
    }
};

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

//HAMBURGER MENU
const HAMBURGER = $('#hamburger');
const NAV_MENU = $('#nav-menu');
HAMBURGER.on('click', () => {
    HAMBURGER.toggleClass('hamburger-active');
    NAV_MENU.toggleClass('hidden');
});
$(window).on('click', (e) => {
    if(e.target != HAMBURGER[0] && e.target != NAV_MENU[0]){
        HAMBURGER.removeClass('hamburger-active');
        NAV_MENU.addClass('hidden');
    }
})

//CAROUSEL
const CAROUSEL = $('.carousel');
const WRAPPER = $('.wrapper');
const FIRST_CARD_WIDTH = $('.carousel .card')[0].offsetWidth;
const ARTICLE = $('.article');
const WRAPPER2 = $('.wrapper2');
const FIRST_ARTICLE_WIDTH = $('.article .article-card')[0].offsetWidth;
const ARROW_GALLERY = $('.wrapper .arrow');
const ARROW_ARTICLE = $('.wrapper2 .arrow');
const CAROUSEL_CHILDREN = [...CAROUSEL.children()];
let is_dragging = false, startX, startScrollLeft, timeoutId;
let card_per_view = Math.round(CAROUSEL[0].offsetWidth/FIRST_CARD_WIDTH);

$.each(CAROUSEL_CHILDREN.slice(-card_per_view).reverse(), (k,v) => {
    CAROUSEL.prepend($(v).prop('outerHTML'));
});
$.each(CAROUSEL_CHILDREN.slice(0, card_per_view), (k,v) => {
    CAROUSEL.append($(v).prop('outerHTML'));
});

$.each(ARROW_GALLERY, (k,v) => {
    $(v).on('click',()=>{
        const FIRST_CARD_WIDTH = $('.carousel .card')[0].offsetWidth;
        CAROUSEL.scrollLeft(CAROUSEL[0].scrollLeft += v.id === 'galeri-kiri'? -FIRST_CARD_WIDTH : FIRST_CARD_WIDTH);
    });
});
$.each(ARROW_ARTICLE, (k,v) => {
    $(v).on('click',()=>{
        const FIRST_ARTICLE_WIDTH = $('.article .article-card')[0].offsetWidth;
        ARTICLE.scrollLeft(ARTICLE[0].scrollLeft += v.id === 'artikel-kiri'? -FIRST_ARTICLE_WIDTH : FIRST_ARTICLE_WIDTH);
    });
});

const dragStart = (e) => {
    is_dragging = true;
    ARTICLE.addClass('dragging');
    startX = e.pageX;
    startScrollLeft = ARTICLE.scrollLeft();
};
const dragging = (e) => {
    if(!is_dragging) return;
    ARTICLE.scrollLeft(startScrollLeft - (e.pageX - startX));
}
const dragStop = () => {
    is_dragging = false;
    ARTICLE.removeClass('dragging');
}
const autoPlay = () => {
    if(window.innerWidth < 768) return;
    timeoutId = setTimeout(() => CAROUSEL[0].scrollLeft += FIRST_CARD_WIDTH, 2000);
}
const infiniteScroll = () => {
    if(CAROUSEL.scrollLeft() === 0){
        CAROUSEL.addClass('no-transition');
        CAROUSEL.scrollLeft(CAROUSEL[0].scrollWidth - (2*CAROUSEL[0].offsetWidth));
        CAROUSEL.removeClass('no-transition');
    } else if (Math.ceil(CAROUSEL.scrollLeft()) === CAROUSEL[0].scrollWidth - CAROUSEL[0].offsetWidth){
        CAROUSEL.addClass('no-transition');
        CAROUSEL.scrollLeft(CAROUSEL[0].offsetWidth);
        CAROUSEL.removeClass('no-transition');
    }
    clearTimeout(timeoutId);
    if(!WRAPPER[0].matches(':hover')) autoPlay();
}
autoPlay();
WRAPPER.on('mouseenter',() => clearTimeout(timeoutId));
WRAPPER.on('mouseleave',() => autoPlay());
CAROUSEL.on('scroll',infiniteScroll);
ARTICLE.on('mousedown',dragStart);
ARTICLE.on('mousemove',dragging);
$(document).on('mouseup',dragStop);

//PARALLAX EFFECT
const PEMANDANGAN = $('#pemandangan');
const MASJID = $('#masjid');
const AWAN_1 = $('#awan-1');
const AWAN_2 = $('#awan-2');
const AWAN_3 = $('#awan-3');
const AWAN_4 = $('#awan-4');
const AWAN_1_START = AWAN_1[0].getBoundingClientRect().left;
const AWAN_2_START = AWAN_2[0].getBoundingClientRect().left;
const AWAN_3_START = AWAN_3[0].getBoundingClientRect().left;
const AWAN_4_START = AWAN_4[0].getBoundingClientRect().left;
$(window).on('scroll', () => {
	let value = window.scrollY;
	AWAN_1[0].style.left = (AWAN_1_START + (value * 0.9)) + 'px';
	AWAN_2[0].style.left = (AWAN_2_START + (value * 0.9)) + 'px';
	AWAN_3[0].style.left = (AWAN_3_START + (value * 0.9)) + 'px';
	AWAN_4[0].style.left = (AWAN_4_START + (value * 0.9)) + 'px';
	PEMANDANGAN[0].style.top = (value * 0.4) + 'px';
	MASJID[0].style.top = (value * 0.4) + 'px';
});

//CARDS HIGHLIGHTS
$('.card .no-highlight').on('mouseenter',(e)=>{
    console.log($(e.target))
    $(e.target).removeClass('no-highlight');
    $(e.target).addClass('highlight');
    $(e.target).find('.no-highlight-text').addClass('highlight-text');
    $(e.target).find('.no-highlight-text').removeClass('no-highlight-text');
});
$('.card .no-highlight').on('mouseleave',(e)=>{
    console.log('memek')
    $(e.target).removeClass('highlight');
    $(e.target).addClass('no-highlight');
    $(e.target).find('.highlight-text').addClass('no-highlight-text');
    $(e.target).find('.highlight-text').removeClass('highlight-text');
});

//ARROWS HIGHLIGHTS
$(".arrow").on('mouseenter',(e)=>{
    $(e.target).removeClass('arrow-fadeout');
    $(e.target).addClass('arrow-fadein');
});
$(".arrow").on('mouseleave',(e)=>{
    $(e.target).removeClass('arrow-fadein');
    $(e.target).addClass('arrow-fadeout');
});

