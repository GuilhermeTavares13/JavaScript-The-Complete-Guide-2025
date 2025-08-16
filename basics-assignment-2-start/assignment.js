const task3Element = document.getElementById('task-3');

function simpleText() {
    alert('My text');
}

function anotherText(name) {
    alert(name);
}

simpleText();
anotherText('Joe Doe');

task3Element.addEventListener('click',simpleText);

function anotherFunction(param1,param2,param3) {
    return `${param1}  ${param2}  ${param3}`;
}

alert(anotherFunction('Doctor','Joe','Doe'))