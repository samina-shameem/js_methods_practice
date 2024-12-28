//string methods
const stringMethodBtn=document.getElementById('stringMethodBtn');
const stringOutput=document.getElementById('stringOutput');

stringMethodBtn.addEventListener('click', function(){
    let str="hello world";
    let modifiedStr="hello world";
    stringOutput.textContent=`Modified String:${modifiedStr}`;
});

//array methods
const arrayMethodBtn=document.getElementById('arrayMethodBtn');
const arrayOutput=document.getElementById('arrayOutput');

arrayMethodBtn.addEventListener('click', function(){
    let arr=[1,2,3];
    arr.push(4);//add an element to the array
    arrayOutput.textContent=`Modified Array: [${arr}]`;
});

//object methods
const objectMethodBtn=document.getElementById('objectMethodBtn');
const  objectOutput=document.getElementById('objectOutput');

objectMethodBtn.addEventListener('click', function() {
    let person={
       firstName:"samina",
       lastName:"salam",
       fullName:function () {
        return this.firstName + "" + this.lastName;
       }
    };
    objectOutput.textContent=`Object Method:${person.fullName()}`;
    console.log("added");

});

//DOM Manipulation Example
const domBtn=document.getElementById('domBtn');
const domOutput=document.getElementById('domOutput');

domBtn.addEventListener('click', function (){
    domOutput.textContent="This text is changed by JavaScript";
    domOutput.style.color="green";//change text color
});

//loopx example
const loopBtn=document.getElementById('loopBtn');
const loopOutput=document.getElementById('loopOutput');

loopBtn.addEventListener('click', function (){
    let result='';
    for (let i=1; i <=10; i++){
        result += `Loop iteration: ${i} <br>`;
    }
    loopOutput.innerHTML=result;
});
