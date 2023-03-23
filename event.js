document.getElementById('update').addEventListener('click', function () {
    const nameInput = document.getElementById('nameField');
    // console.log(nameInput.value);
    const p = document.getElementById('para');
    p.innerText = nameInput.value;
    nameInput.value = '';

})

function firstClick() {
    document.body.style.backgroundColor = 'red';
}

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

const yellowButton = document.getElementById('make-yellow');
// console.log(yellowButton);
yellowButton.onclick = yellowButton

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// 

const makeSky = document.getElementById('make-sky');
makeSky.onclick = function () {
    document.body.style.backgroundColor = 'sky-blue';
}

const gray = document.getElementById('make-gray');
gray.addEventListener('click', function () {
    document.body.style.backgroundColor = 'gray'
})

// important
document.getElementById('make-black').addEventListener('click', function () {
    document.body.style.backgroundColor = 'black'
})

// important

function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}

document.getElementById('option-2').addEventListener('click', function () {
    document.body.style.backgroundColor = 'purple'
})