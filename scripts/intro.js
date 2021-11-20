

const infoSection = document.querySelector('.info');
const headerSection = document.querySelector('.header');

function jumpToAbout() {
    
    const headerPosition = window.getComputedStyle(headerSection, null).getPropertyValue("position");
    const infoOffset = (headerPosition==='sticky') ? headerSection.getBoundingClientRect().height : 0;

    const infoY = infoSection.getBoundingClientRect().top - infoOffset;
    window.scroll(0, infoY);
}

document.querySelector('.intro__action-link').addEventListener('click', (ev)=>{
    ev.preventDefault();
    jumpToAbout();
});

