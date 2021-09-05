const deviceWidth = window.matchMedia("(max-width:991px)");
const hme = document.querySelector(".home");
const btn_hme = document.querySelector(".btn-home");
const input = document.querySelector(".input");
const inp_head = document.querySelector(".input-head");
const txtarea = document.querySelector(".textarea");
const btn_next = document.querySelector(".btn-next");
const settings = document.querySelector(".settings");
const btn_op = document.querySelector(".btn-op");
const btn_back = document.querySelector(".btn-back");
const output = document.querySelector(".output");
const op_head = document.querySelector(".output-head");
const btn_back2 = document.querySelector(".btn-back2");
var result = "";
var enc = 0;
var _case = document.getElementById("case");
var valid = 1;
var for_ch = document.getElementById("foreign-char");
var valid2 = 0;

const op_txt = document.querySelector(".output-text");

// Storing Input Text
const usr_inp = document.getElementById("user-input");
var s = "";
usr_inp.oninput = function () {
    s = usr_inp.value;
}

// Storing shift constant
const sft_rng = document.getElementById("shift-range");
const sft_val = document.getElementById("shift-val");
var k;
sft_val.innerHTML = (sft_rng.value * 2);
k = sft_rng.value * 2;
sft_rng.oninput = function () {
    sft_val.innerHTML = (this.value * 2);
    k = (this.value * 2);
}

// Function Definitions

function validator() {
    if (_case.checked == false) {
        valid = 0;
    }
    else {
        valid = 1;
    }
}

function validator2() {
    if (for_ch.checked == true) {
        valid2 = 1;
    }
    else {
        valid2 = 0;
    }
}

function encode() {
    enc = 1;
    inp_head.innerHTML = "Normal Text";
    op_head.innerHTML = "Cypher Text";
    btn_op.innerHTML = "Encode";
    if (deviceWidth.matches) {
        page1_mob();
    }
    else {
        page1();
    }
}

function decode() {
    enc = 0;
    inp_head.innerHTML = "Cypher Text";
    op_head.innerHTML = "Normal Text";
    btn_op.innerHTML = "Decode";
    if (deviceWidth.matches) {
        page1_mob();
    }
    else {
        page1();
    }
}

function home() {
    hme.classList.remove("d-none");
    hme.classList.add("d-flex");
    input.classList.add("d-none");
    settings.classList.add("d-none");
    output.classList.add("d-none");
}

function op_disp() {
    if (deviceWidth.matches) {
        page3_mob();
    }
    else {
        page1();
    }
    if (enc == 1) {
        // Encoding
        result = "";
        let enc_lower = "abcdefghijklmnopqrstuvwxyz";
        let enc_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let len = s.length;
        for (let i = 0; i < len; i++) {
            if (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z') {
                let temp = enc_upper.indexOf(s.charAt(i));
                temp = ((temp + k) % 26);
                result = result + (enc_upper.charAt(temp));
            }
            else if (s.charAt(i) >= 'a' && s.charAt(i) <= 'z') {
                let temp = enc_lower.indexOf(s.charAt(i));
                temp = ((temp + k) % 26);
                result = result + (enc_lower.charAt(temp));
            }
            else if (valid2 == 0) {
                result = result + (s.charAt(i));
            }
        }
        if (valid == 0) {
            result = result.toLowerCase();
        }

        op_txt.innerHTML = result;
    }
    else {
        // Decoding
        result = "";
        let enc_lower = "abcdefghijklmnopqrstuvwxyz";
        let enc_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let len = s.length;
        for (let i = 0; i < len; i++) {
            if (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z') {
                let temp = enc_upper.indexOf(s.charAt(i));
                temp = ((temp - k) % 26);
                if (temp < 0) {
                    temp = 26 + temp;
                }
                result = result + (enc_upper.charAt(temp));
            }
            else if (s.charAt(i) >= 'a' && s.charAt(i) <= 'z') {
                let temp = enc_lower.indexOf(s.charAt(i));
                temp = ((temp - k) % 26);
                if (temp < 0) {
                    temp = 26 + temp;
                }
                result = result + (enc_lower.charAt(temp));
            }
            else if (valid2 == 0) {
                result = result + (s.charAt(i));
            }
        }
        if (valid == 0) {
            result = result.toLowerCase();
        }
        op_txt.innerHTML = result;
    }
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