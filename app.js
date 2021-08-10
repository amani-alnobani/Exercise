'use strict';
let childArr = [];

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Child(name, minAge, maxAge, favToy) {
    this.name = name;
    this.min = minAge;
    this.max = maxAge;
    this.favToy = favToy;
    this.theAge = [];
    childArr.push(this);

}

let ahmad = new Child('ahmad', 2, 6, 'bear')
let rama = new Child('rama', 4, 8, 'cat')
let moh = new Child('mohammad', 3, 5, 'lego')

// console.log(childArr.length);

Child.prototype.calChildAge = function () {
    for (let i = 0; i < childArr.length; i++) {
        this.theAge.push(randomAge(this.min, this.max));
        // console.log(this.theAge[i]);
        // childArr[i].childAge();
    }
    
}
// console.log(childArr.length);

// console.log(childArr);

let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);


function makeHead() {
    let headerRaw = document.createElement('tr');
    table.appendChild(headerRaw);
    let firstTh = document.createElement('th')
    headerRaw.appendChild(firstTh);
    firstTh.textContent = 'Name';

    let lastTh = document.createElement('th');
    headerRaw.appendChild(lastTh)
    lastTh.textContent = 'age'

    let favToyTd = document.createElement('th');
    headerRaw.appendChild(favToyTd);
    favToyTd.textContent = 'favourit toy';
}

Child.prototype.render = function () {
    let dataRaw = document.createElement('tr');
    table.appendChild(dataRaw);

    let nameTd = document.createElement('td');
    dataRaw.appendChild(nameTd);
    nameTd.textContent = this.name;

    let ageTd = document.createElement('td');
    dataRaw.appendChild(ageTd);

    
    for (let i = 0; i < childArr.length; i++) {
        
        ageTd.textContent = this.theAge[i];
        childArr[i].calChildAge();
        console.log(childArr);
        // console.log(childArr.length);
    }
    let toyTd = document.createElement('td');
    dataRaw.appendChild(toyTd);
    toyTd.textContent = this.favToy;
    
}
makeHead();


    for (let i = 0; i < childArr.length; i++) {
        childArr[i].render();
      
    }
function makeFooter() {
    let footerRaw=document.createElement('tr');
    table.appendChild(footerRaw);
    footerRaw.textContent='total age'
    
    for (let i = 0; i < 1; i++) {
        let total = 0;
        
        for (let j = 0; j < childArr.length; j++) {
            total+=childArr[j].theAge[i];
            // console.log(childArr[j]);
        }
        // console.log(total);
        let footerValue=document.createElement('th');
        footerRaw.appendChild(footerValue);
        footerValue.textContent= total;
    }
        
}
makeFooter();
let form =document.getElementById('form');

form.addEventListener('submit',submitter);

function submitter(event) {
    event.preventDefault();
    let childname= event.target.nameField.value;
    let miniAge=parseInt(event.target.minAgeField.value);
    let maxiAge=parseInt(event.target.maxAgeField.value);
    let favoToy=event.target.favToy.value;
    let addedChild=new Child(childname,miniAge,maxiAge,favoToy);
    table.textContent = "";

    addedChild.calChildAge();
    makeHead();

    for (let i = 0; i < childArr.length; i++) {
        childArr[i].render(); 
    }
    // console.log(addedChild);
    makeFooter();
}
