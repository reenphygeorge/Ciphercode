const output = document.querySelector(".output");
const settings = document.querySelector(".settings");
const input = document.querySelector(".input");
const txtarea = document.querySelector(".textarea");
const btn_next = document.querySelector(".btn-next");
const btn_back = document.querySelector(".btn-back"); 
function page1() {
    input.classList.remove("d-none");
    input.classList.add("d-flex");
    output.classList.remove("d-flex");
    output.classList.add("d-none");
    settings.classList.remove("d-flex");
    settings.classList.add("d-none");
    btn_next.classList.add("d-flex");
    btn_next.classList.remove("d-none");
    txtarea.style.height = "250px";
}
function page2() {
    input.classList.remove("d-flex");
    input.classList.add("d-none");
    settings.classList.add("d-flex");
    settings.classList.remove("d-none");
    btn_back.classList.remove("d-none");
}
function page3() {
    settings.classList.remove("d-flex");
    settings.classList.add("d-none");
    output.classList.add("d-flex");
    output.classList.remove("d-none");
    btn_back.classList.remove("d-none");
}
const deviceWidth = window.matchMedia("(max-width:991px)");
if(deviceWidth.matches) {
    page1();
}