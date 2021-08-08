'use strict';
childArr=[];

function randomAge(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}


function Child(name,minAge,maxAge,favToy){
    this.name=name;
    this.min=minAge;
    this.max=maxAge;
    this.favToy=favToy;
    this.theAge=[];
    childArr.push(this);

}

let ahmad = new Child('ahmad',2,6,'bear')
let rama = new Child('rama',4,8,'cat')
let moh = new Child('mohammad',3,5,'lego')



Child.prototype.childAge= function () {
    for (let i = 0; i < childArr.length; i++) {
        const element = array[i];
        
    }
}


let parent =document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);

