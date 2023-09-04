/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-4

    Author: 
    Date:   

    Filename: project01-04.js
*/

//define variables for home and work addresses

let street=document.getElementById('street')
let city=document.getElementById('city')
let state=document.getElementById('state')
let code =document.getElementById('code')
let home=document.getElementById('homeoption')
let work=document.getElementById('workoption')
let homestreet="20S Bryant Ave"
let homecity="Edmond"
let homestate="OKC"
let homecode="73034"
let workstreet="100N UCO"
let workcity="Edmond"
let workstate="OKC"
let workcode="73034"

home.onclick=function()
{

street.value=homestreet;
city.value=homecity;
state.value=homestate;
code.value=homecode;

}

work.onclick=function()
{

street.value=workstreet;
city.value=workcity;
state.value=workstate;
code.value=workcode;

}



