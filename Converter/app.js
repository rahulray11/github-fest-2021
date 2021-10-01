const milimeterEl = document.querySelector('#milimeter');
const centimeterEl = document.querySelector('#centimeter');
const meterEl = document.querySelector('#meter');
const kilometerEl = document.querySelector('#kilometer');

const milimeter = (value) =>{
    centimeterEl.value = value/10;
    meterEl.value = value/1000;
    kilometerEl.value = value/1000000;
}

function centimeter(value){
    milimeterEl.value = value *10;
    meterEl.value = value/100;
    kilometerEl.value = value/1000000;
}

function meter(value){
    centimeterEl.value = value*100;
    milimeterEl.value = value*1000;
    kilometerEl.value = value/1000;
}

function kilometer(value){
    centimeterEl.value = value*10000;
    milimeterEl.value = value*1000000;
    meterEl.value = value*1000;
}