const slidelist = document.querySelector(".slide_list");
const slideContents = document.querySelectorAll(".slide_content");
const leftbutton = document.querySelector('.left_button');
const rightbutton = document.querySelector('.right_button');
const slideLen = slideContents.length;
const slideWidth = 400;
const slideSpeed = 400;

let curIndex = 0
slidelist.style.width = slideLen * slideWidth + "px";

rightbutton.addEventListener('click', () => {
    if(curIndex < slideLen - 1) {
        slidelist.style.transition = slideSpeed +'ms';
        slidelist.style.transform = "translateX(-" + (slideWidth * (curIndex + 1)) + "px)";
        curSlide = slideContents[++curIndex];
    } else {
        slidelist.style.transition = slideSpeed +'ms';
        slidelist.style.transform = "translateX(0px)";
        curIndex = 0
    }
    console.log(curIndex)
});


leftbutton.addEventListener('click', () => {
    if(curIndex > 0) {
        slidelist.style.transition = slideSpeed +'ms';
        slidelist.style.transform = "translateX(-" + (slideWidth * (curIndex - 1)) + "px)";
        curSlide = slideContents[--curIndex];

    } else {
        slidelist.style.transition = slideSpeed +'ms';
        slidelist.style.transform = "translateX(-"+ (slideLen-1) * slideWidth +"px)";
        curIndex = slideLen-1
    }
    console.log(curIndex)

});