const hme = document.querySelector(".home");
const btn_hme = document.querySelector(".btn-home");
const input = document.querySelector(".input");
const txtarea = document.querySelector(".textarea");
const btn_next = document.querySelector(".btn-next");
const settings = document.querySelector(".settings");
const btn_back = document.querySelector(".btn-back");
const output = document.querySelector(".output");
const btn_back2 = document.querySelector(".btn-back2");

const deviceWidth = window.matchMedia("(max-width:991px)");

function encode() {
    if (deviceWidth.matches) {
        page1_mob();
    }
    else {
        page1();
    }
}

// function decode() {
//     if(deviceWidth.matches) {
//         // const inp_head = document.querySelector(".imput-head");
//         // inp_head.innerHTML = "Cypher Text";
//         page1_mob();
//     }
//     else {
//         page1();
//         const inp_head = document.querySelector(".imput-head");
//         inp_head.innerHTML = "Cypher Text";
//     }    
// }

function home() {
    hme.classList.remove("d-none");
    hme.classList.add("d-flex");
    input.classList.add("d-none");
    settings.classList.add("d-none");
    output.classList.add("d-none");
}

function page1() {
    hme.classList.remove("d-flex");
    hme.classList.add("d-none");
    btn_hme.classList.remove("d-none");
    btn_hme.classList.add("d-flex");
    btn_next.classList.add("d-none");
    btn_next.classList.remove("d-flex");
    btn_hme.classList.add("d-flex");
    input.classList.remove("d-none");
    input.classList.add("d-flex");
    settings.classList.remove("d-none");
    settings.classList.add("d-flex");
    output.classList.remove("d-none");
    output.classList.add("d-flex");
}

function page1_mob() {
    hme.classList.add("d-none");
    hme.classList.remove("d-flex");
    input.classList.remove("d-none");
    input.classList.add("d-flex");
    settings.classList.remove("d-flex");
    settings.classList.add("d-none");
    output.classList.remove("d-flex");
    output.classList.add("d-none");
    btn_hme.classList.add("d-flex");
    btn_hme.classList.remove("d-none");
    btn_back.classList.remove("d-none");
    btn_back.classList.add("d-flex");
    btn_back2.classList.remove("d-none");
    btn_back2.classList.add("d-flex");
    btn_hme.classList.remove("d-none");
    btn_hme.classList.add("d-flex");
}

function page2_mob() {
    input.classList.remove("d-flex");
    input.classList.add("d-none");
    settings.classList.add("d-flex");
    settings.classList.remove("d-none");
    output.classList.remove("d-flex");
    output.classList.add("d-none");
}

function page3_mob() {
    input.classList.remove("d-flex");
    input.classList.add("d-none");
    settings.classList.remove("d-flex");
    settings.classList.add("d-none");
    output.classList.add("d-flex");
    output.classList.remove("d-none");
}