"use strict";

const to_count1 = 32594;
const to_count1_el = document.getElementById("number_count1");

let current1 = 0;

const interval1 = setInterval(() => {
    current1 = current1 + (((to_count1 - current1) >= 39) ? 39 : to_count1 - current1);
    to_count1_el.innerHTML = current1;
    if(current1 == to_count1) clearInterval(interval1);
}, 10);

const to_count2 = 52;
const to_count2_el = document.getElementById("number_count2");

let current2 = 0;

const interval2 = setInterval(() => {
    current2 = current2 + (((to_count2 - current2) >= 3) ? 3 : to_count2 - current2);
    to_count2_el.innerHTML = current2;
    if(current2 == to_count2) clearInterval(interval2);
}, 10);


const to_count3 = 1000;
const to_count3_el = document.getElementById("number_count3");

let current3 = 0;

const interval3 = setInterval(() => {
    current3 = current3 + (((to_count3 - current3) >= 19) ? 19: to_count3 - current3);
    to_count3_el.innerHTML = current3;
    if(current3 == to_count3) clearInterval(interval3);
}, 100);


const to_count4 = 5000;
const to_count4_el = document.getElementById("number_count4");

let current4 = 0;

const interval4 = setInterval(() => {
    current4 = current4 + (((to_count4 - current4) >= 11) ? 11 : to_count4 - current4);
    to_count4_el.innerHTML = current4;
    if(current4 == to_count4) clearInterval(interval4);
}, 100);